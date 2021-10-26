import momentTz from "moment-timezone";
import {curfews} from './data'
export {curfews} from './data'

export const TIME_ZONE = 'America/Jamaica'

/**
 * A data type holding useful curfew information, derived from the current date and time
 */
export class CurfewData {

  /**
   * @type CurfewStatus
   */
  status;

  /**
   * @type string
   */
  detail;

  /**
   * @type Curfew
   */
  curfew;

  /**
   * Build curfew data around the given date
   * @param {moment.Moment} moment The date for which to fetch curfew data
   */
  constructor(moment) {

    // Check if there is an active curfew
    this.curfew = curfews.find(it => moment.isBetween(it.start, it.end))

    if (this.curfew) {
      this.status = CURFEW_STATUSES.active
      this.detail = `Curfew ends ${relativeMomentString(this.curfew.end)}`
      return
    }

    // Check if there is a curfew about to start in the next two hours
    this.curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isAfter(moment) && curfewMoment.diff(moment, 'hours', true) <= 2
    })

    if (this.curfew) {
      this.status = CURFEW_STATUSES.startingSoon
      this.detail = `Curfew starts ${relativeMomentString(this.curfew.start)}`
      return
    }

    // Check if there is a curfew starting later today
    this.curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isAfter(moment) && curfewMoment.isSame(moment, 'day')
    })

    if (this.curfew) {
      this.status = CURFEW_STATUSES.movementAllowed
      this.detail = `Curfew starts ${relativeMomentString(this.curfew.start)}`
      return
    }

    // Check if there's a curfew that has already ended today
    this.curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isBefore(moment) && curfewMoment.isSame(moment, 'day')
    })

    if (this.curfew) {
      this.status = CURFEW_STATUSES.movementAllowed
    } else {
      this.status = CURFEW_STATUSES.noCurfewToday
    }

    // Find out when the next curfew starts
    const nextCurfew = curfews.find(it => it.start.isAfter(moment))
    if (nextCurfew) {
      this.detail = `Next curfew ${relativeMomentString(nextCurfew.start)}`
      return
    }

    this.detail = 'No information yet on the next curfew'
  }
}

/**
 * @typedef {{title: string, class: string}} CurfewStatus
 */
export const CURFEW_STATUSES = {
  active: {
    title: 'Curfew active',
    class: 'curfew-active'
  },
  startingSoon: {
    title: 'Curfew starting soon',
    class: 'almost-curfew'
  },
  movementAllowed: {
    title: 'Movement allowed',
    class: 'movement-allowed'
  },
  noCurfewToday: {
    title: 'No curfew today',
    class: 'no-curfew'
  },
}

/**
 * Get all the curfews for a particular day
 * @param {moment.Moment} day
 * @return {Array<Curfew>}
 */
export function findCurfews(day) {
  return curfews.filter(curfew => {
    return curfew.start.isSame(day, 'day') || curfew.end.isSame(day, 'day') ||
      (curfew.start.isBefore(day, 'day') && curfew.end.isAfter(day, 'day'))
  })
}

/**
 * Format a date to a relative string (e.g. 'tomorrow at 5:00pm')
 * @param {moment.Moment} moment
 * @return string
 */
export function relativeMomentString(moment) {
  const now = momentTz.tz(TIME_ZONE)

  /**
   * @type string
   */
  let result;
  const sameDay = moment.date() === now.date()
  const dayDifference = sameDay ? 0 : Math.ceil(moment.diff(now, 'days', true))
  const formattedTime = moment.format('h:mma')

  if (dayDifference < 1) {
    result = `at ${formattedTime}`
  } else if (dayDifference === 1) {
    result = `tomorrow at ${formattedTime}`
  } else if (dayDifference < 7) {
    result = `on ${moment.format('dddd')} at ${formattedTime}`
  } else {
    result = `on ${moment.format('ddd')} at ${formattedTime}`
  }

  return result;
}