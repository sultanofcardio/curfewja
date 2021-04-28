import moment from "moment";
import data from "../data";
import CurfewData from "../model/CurfewData";

export const CURFEW_STATUSES = {
  active: 'Curfew active',
  startingSoon: 'Curfew starting soon',
  movementAllowed: 'Movement allowed',
  noCurfewToday: 'No curfew today',
}

/**
 * @return {Curfew}
 */
export function getCurrentCurfew() {
  window.moment = moment
  const today = moment().utcOffset(-5).format('YYYYMMDD')
  return data.find(curfew => curfew.date.format('YYYYMMDD') === today)
}

/**
 * @return {Curfew}
 */
function getNextCurfew() {
  return [...data].filter(it => it.date.isAfter(moment()))
    .sort((a, b) => {
      return a.date.format('YYYYMMDD') - b.date.format('YYYYMMDD')
    })[0]
}

/**
 * Format a moment to a relative date string
 * @param {moment.Moment} other
 * @return string
 */
function relativeMomentString(other) {
  /**
   * @type string
   */
  let result;
  const now = moment().utcOffset(-5)
  const sameDay = other.date() === now.date()
  const dayDifference = sameDay ? 0 : Math.ceil(other.diff(now, 'days', true))
  const formattedTime = other.format('h:mma')

  if (dayDifference < 1) {
    result = `at ${formattedTime}`
  } else if (dayDifference === 1) {
    result = `tomorrow at ${formattedTime}`
  } else if (dayDifference < 7) {
    result = `on ${other.format('dddd')} at ${formattedTime}`
  } else {
    result = `on ${other.format('ddd')} at ${formattedTime}`
  }

  return result;
}

/**
 * Get the main curfew data for right now
 * @return {CurfewData}
 */
export function getCurfewData() {
  const now = moment().utcOffset(-5)
  const currentCurfew = getCurrentCurfew()

  const nextCurfewDetail = () => {
    const nextCurfew = getNextCurfew()
    let detail;
    if (nextCurfew) {
      detail = 'Next curfew ' + relativeMomentString(nextCurfew.start)
    } else {
      detail = 'No information yet on the next curfew'
    }
    return detail
  }

  if (!currentCurfew) {
    return new CurfewData(CURFEW_STATUSES.noCurfewToday, nextCurfewDetail())
  }

  const prevCurfewEndHour = currentCurfew.previousEnd.hour()
  const nowHour = now.hour()

  /**
   * @type CurfewData
   */
  let curfewData;

  // Check if the previous curfew has ended
  if (prevCurfewEndHour - nowHour > 0) {
    curfewData = new CurfewData(CURFEW_STATUSES.active, `Curfew ends ${relativeMomentString(currentCurfew.previousEnd)}`)
  } else {
    const hoursUntilCurfew = currentCurfew.start.diff(now, 'hours', true)
    if (hoursUntilCurfew > 2) {
      curfewData = new CurfewData(CURFEW_STATUSES.movementAllowed, `Curfew starts ${relativeMomentString(currentCurfew.start)}`)
    } else if (hoursUntilCurfew > 0 && hoursUntilCurfew <= 2) {
      curfewData = new CurfewData(
        CURFEW_STATUSES.startingSoon,
        `Curfew starts ${relativeMomentString(currentCurfew.start)}`
      )
    } else {
      // Check if the curfew already ended
      const endsToday = currentCurfew.end.date() === now.date()
      if (endsToday) {
        const endHour = currentCurfew.end.hour()
        const endMinute = currentCurfew.end.minute()
        const nowMinute = now.minute()
        const alreadyEnded = endHour < nowHour || (endHour === nowHour && endMinute <= nowMinute)
        if (alreadyEnded) {
          curfewData = new CurfewData(CURFEW_STATUSES.movementAllowed, nextCurfewDetail())
        } else {
          curfewData = new CurfewData(CURFEW_STATUSES.active, `Curfew ends ${relativeMomentString(currentCurfew.end)}`)
        }
      } else {
        curfewData = new CurfewData(CURFEW_STATUSES.active, `Curfew ends ${relativeMomentString(currentCurfew.end)}`)
      }
    }
  }

  return curfewData;
}