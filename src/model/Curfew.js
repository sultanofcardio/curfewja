import momentTz from "moment-timezone";

export const TIME_ZONE = 'America/Jamaica'

/**
 * A data type representing the duration of a curfew restriction.
 *
 * A curfew has a {@link start} and an {@link end} date.
 */
export default class Curfew {

  /**
   * @type {moment.Moment}
   */
  start;

  /**
   * @type {moment.Moment}
   */
  end;

  /**
   * Create a new Curfew object
   * @param {string} start
   * @param {string} end
   */
  constructor(start, end) {
    this.start = momentTz.parseZone(start)
    this.end = momentTz.parseZone(end)
  }
}

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
   * Build curfew data around the given date
   * @param {moment.Moment} moment The date for which to fetch curfew data
   */
  constructor(moment) {

    // Check if there is an active curfew
    let curfew = curfews.find(it => moment.isBetween(it.start, it.end))

    if (curfew) {
      this.status = CURFEW_STATUSES.active
      this.detail = `Curfew ends ${relativeMomentString(curfew.end)}`
      return
    }

    // Check if there is a curfew about to start in the next two hours
    curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isAfter(moment) && curfewMoment.diff(moment, 'hours', true) <= 2
    })

    if (curfew) {
      this.status = CURFEW_STATUSES.startingSoon
      this.detail = `Curfew starts ${relativeMomentString(curfew.start)}`
      return
    }

    // Check if there is a curfew starting later today
    curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isAfter(moment) && curfewMoment.isSame(moment, 'day')
    })

    if (curfew) {
      this.status = CURFEW_STATUSES.movementAllowed
      this.detail = `Curfew starts ${relativeMomentString(curfew.start)}`
      return
    }

    // Check if there's a curfew that has already ended today
    curfew = curfews.find(it => {
      const curfewMoment = it.start
      return curfewMoment.isBefore(moment) && curfewMoment.isSame(moment, 'day')
    })

    if (curfew) {
      this.status = CURFEW_STATUSES.movementAllowed
    } else {
      this.status = CURFEW_STATUSES.noCurfewToday
    }

    // Find out when the next curfew starts
    curfew = curfews.find(it => it.start.isAfter(moment))
    if (curfew) {
      this.detail = `Next curfew ${relativeMomentString(curfew.start)}`
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

export const curfews = [
  // Week of April 25 - May 01
  new Curfew("2021-04-25T14:00:00-05:00", "2021-04-26T05:00:00-05:00"),
  new Curfew("2021-04-26T20:00:00-05:00", "2021-04-27T05:00:00-05:00"),
  new Curfew("2021-04-27T20:00:00-05:00", "2021-04-28T05:00:00-05:00"),
  new Curfew("2021-04-28T20:00:00-05:00", "2021-04-29T05:00:00-05:00"),
  new Curfew("2021-04-29T20:00:00-05:00", "2021-04-30T05:00:00-05:00"),
  new Curfew("2021-04-30T20:00:00-05:00", "2021-05-01T05:00:00-05:00"),
  new Curfew("2021-05-01T16:00:00-05:00", "2021-05-02T05:00:00-05:00"),

  // Week of May 02 - May 08
  new Curfew("2021-05-02T14:00:00-05:00", "2021-05-03T05:00:00-05:00"),
  new Curfew("2021-05-03T20:00:00-05:00", "2021-05-04T05:00:00-05:00"),
  new Curfew("2021-05-04T20:00:00-05:00", "2021-05-05T05:00:00-05:00"),
]

/**
 * Get all the curfews for a particular day
 * @param {moment.Moment} day
 * @return {Array<Curfew>}
 */
export function findCurfews(day) {
  return curfews.filter(curfew => {
    return curfew.start.isSame(day, 'day') || curfew.end.isSame(day, 'day')
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