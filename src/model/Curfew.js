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
  new Curfew("2021-05-05T20:00:00-05:00", "2021-05-06T05:00:00-05:00"),
  new Curfew("2021-05-06T20:00:00-05:00", "2021-05-07T05:00:00-05:00"),
  new Curfew("2021-05-07T20:00:00-05:00", "2021-05-08T05:00:00-05:00"),
  new Curfew("2021-05-08T18:00:00-05:00", "2021-05-09T05:00:00-05:00"),

  // Week of May 09 - May 15
  new Curfew("2021-05-09T14:00:00-05:00", "2021-05-10T05:00:00-05:00"),
  new Curfew("2021-05-10T20:00:00-05:00", "2021-05-11T05:00:00-05:00"),
  new Curfew("2021-05-11T20:00:00-05:00", "2021-05-12T05:00:00-05:00"),
  new Curfew("2021-05-12T20:00:00-05:00", "2021-05-13T05:00:00-05:00"),
  new Curfew("2021-05-13T20:00:00-05:00", "2021-05-14T05:00:00-05:00"),
  new Curfew("2021-05-14T20:00:00-05:00", "2021-05-15T05:00:00-05:00"),
  new Curfew("2021-05-15T18:00:00-05:00", "2021-05-16T05:00:00-05:00"),

  // Week of May 16 - May 22
  new Curfew("2021-05-16T14:00:00-05:00", "2021-05-17T05:00:00-05:00"),
  new Curfew("2021-05-17T20:00:00-05:00", "2021-05-18T05:00:00-05:00"),
  new Curfew("2021-05-18T20:00:00-05:00", "2021-05-19T05:00:00-05:00"),
  new Curfew("2021-05-19T20:00:00-05:00", "2021-05-20T05:00:00-05:00"),
  new Curfew("2021-05-20T20:00:00-05:00", "2021-05-21T05:00:00-05:00"),
  new Curfew("2021-05-21T20:00:00-05:00", "2021-05-22T05:00:00-05:00"),
  new Curfew("2021-05-22T18:00:00-05:00", "2021-05-23T05:00:00-05:00"),

  // Week of May 23 - May 29
  new Curfew("2021-05-23T14:00:00-05:00", "2021-05-25T05:00:00-05:00"),
  new Curfew("2021-05-25T20:00:00-05:00", "2021-05-26T05:00:00-05:00"),
  new Curfew("2021-05-26T20:00:00-05:00", "2021-05-27T05:00:00-05:00"),
  new Curfew("2021-05-27T20:00:00-05:00", "2021-05-28T05:00:00-05:00"),
  new Curfew("2021-05-28T20:00:00-05:00", "2021-05-29T05:00:00-05:00"),
  new Curfew("2021-05-29T18:00:00-05:00", "2021-05-30T05:00:00-05:00"),

  // Week of May 30 - June 05
  new Curfew("2021-05-30T14:00:00-05:00", "2021-05-31T05:00:00-05:00"),
  new Curfew("2021-05-31T20:00:00-05:00", "2021-06-01T05:00:00-05:00"),
  new Curfew("2021-06-01T20:00:00-05:00", "2021-06-02T05:00:00-05:00"),
  new Curfew("2021-06-02T20:00:00-05:00", "2021-06-03T05:00:00-05:00"),
  new Curfew("2021-06-03T21:00:00-05:00", "2021-06-04T05:00:00-05:00"),
  new Curfew("2021-06-04T21:00:00-05:00", "2021-06-05T05:00:00-05:00"),
  new Curfew("2021-06-05T20:00:00-05:00", "2021-06-06T05:00:00-05:00"),

  // Week of June 06 - June 12
  new Curfew("2021-06-06T14:00:00-05:00", "2021-06-07T05:00:00-05:00"),
  new Curfew("2021-06-07T21:00:00-05:00", "2021-06-08T05:00:00-05:00"),
  new Curfew("2021-06-08T21:00:00-05:00", "2021-06-09T05:00:00-05:00"),
  new Curfew("2021-06-09T21:00:00-05:00", "2021-06-10T05:00:00-05:00"),
  new Curfew("2021-06-10T21:00:00-05:00", "2021-06-11T05:00:00-05:00"),
  new Curfew("2021-06-11T21:00:00-05:00", "2021-06-12T05:00:00-05:00"),
  new Curfew("2021-06-12T20:00:00-05:00", "2021-06-13T05:00:00-05:00"),

  // Week of June 13 - June 19
  new Curfew("2021-06-13T14:00:00-05:00", "2021-06-14T05:00:00-05:00"),
  new Curfew("2021-06-14T21:00:00-05:00", "2021-06-15T05:00:00-05:00"),
  new Curfew("2021-06-15T21:00:00-05:00", "2021-06-16T05:00:00-05:00"),
  new Curfew("2021-06-16T21:00:00-05:00", "2021-06-17T05:00:00-05:00"),
  new Curfew("2021-06-17T21:00:00-05:00", "2021-06-18T05:00:00-05:00"),
  new Curfew("2021-06-18T21:00:00-05:00", "2021-06-19T05:00:00-05:00"),
  new Curfew("2021-06-19T20:00:00-05:00", "2021-06-20T05:00:00-05:00"),

  // Week of June 20 - June 26
  new Curfew("2021-06-20T14:00:00-05:00", "2021-06-21T05:00:00-05:00"),
  new Curfew("2021-06-21T21:00:00-05:00", "2021-06-22T05:00:00-05:00"),
  new Curfew("2021-06-22T21:00:00-05:00", "2021-06-23T05:00:00-05:00"),
  new Curfew("2021-06-23T21:00:00-05:00", "2021-06-24T05:00:00-05:00"),
  new Curfew("2021-06-24T21:00:00-05:00", "2021-06-25T05:00:00-05:00"),
  new Curfew("2021-06-25T21:00:00-05:00", "2021-06-26T05:00:00-05:00"),
  new Curfew("2021-06-26T20:00:00-05:00", "2021-06-27T05:00:00-05:00"),

  // Week of June 27 - July 03
  new Curfew("2021-06-27T14:00:00-05:00", "2021-06-28T05:00:00-05:00"),
  new Curfew("2021-06-28T21:00:00-05:00", "2021-06-29T05:00:00-05:00"),
  new Curfew("2021-06-29T21:00:00-05:00", "2021-06-30T05:00:00-05:00"),
  new Curfew("2021-06-30T21:00:00-05:00", "2021-07-01T05:00:00-05:00"),
  new Curfew("2021-07-01T23:00:00-05:00", "2021-07-02T05:00:00-05:00"),
  new Curfew("2021-07-02T23:00:00-05:00", "2021-07-03T05:00:00-05:00"),
  new Curfew("2021-07-03T23:00:00-05:00", "2021-07-04T05:00:00-05:00"),

  // Week of July 04 - July 10
  new Curfew("2021-07-04T18:00:00-05:00", "2021-07-05T05:00:00-05:00"),
  new Curfew("2021-07-05T23:00:00-05:00", "2021-07-06T05:00:00-05:00"),
  new Curfew("2021-07-06T23:00:00-05:00", "2021-07-07T05:00:00-05:00"),
  new Curfew("2021-07-07T23:00:00-05:00", "2021-07-08T05:00:00-05:00"),
  new Curfew("2021-07-08T23:00:00-05:00", "2021-07-09T05:00:00-05:00"),
  new Curfew("2021-07-09T23:00:00-05:00", "2021-07-10T05:00:00-05:00"),
  new Curfew("2021-07-10T23:00:00-05:00", "2021-07-11T05:00:00-05:00"),

  // Week of July 11 - July 17
  new Curfew("2021-07-11T18:00:00-05:00", "2021-07-12T05:00:00-05:00"),
  new Curfew("2021-07-12T23:00:00-05:00", "2021-07-13T05:00:00-05:00"),
  new Curfew("2021-07-13T23:00:00-05:00", "2021-07-14T05:00:00-05:00"),
  new Curfew("2021-07-14T23:00:00-05:00", "2021-07-15T05:00:00-05:00"),
  new Curfew("2021-07-15T23:00:00-05:00", "2021-07-16T05:00:00-05:00"),
  new Curfew("2021-07-16T23:00:00-05:00", "2021-07-17T05:00:00-05:00"),
  new Curfew("2021-07-17T23:00:00-05:00", "2021-07-18T05:00:00-05:00"),

  // Week of July 18 - July 24
  new Curfew("2021-07-18T18:00:00-05:00", "2021-07-19T05:00:00-05:00"),
  new Curfew("2021-07-19T23:00:00-05:00", "2021-07-20T05:00:00-05:00"),
  new Curfew("2021-07-20T23:00:00-05:00", "2021-07-21T05:00:00-05:00"),
  new Curfew("2021-07-21T23:00:00-05:00", "2021-07-22T05:00:00-05:00"),
  new Curfew("2021-07-22T23:00:00-05:00", "2021-07-23T05:00:00-05:00"),
  new Curfew("2021-07-23T23:00:00-05:00", "2021-07-24T05:00:00-05:00"),
  new Curfew("2021-07-24T23:00:00-05:00", "2021-07-25T05:00:00-05:00"),

  // Week of July 25 - July 31
  new Curfew("2021-07-25T18:00:00-05:00", "2021-07-26T05:00:00-05:00"),
  new Curfew("2021-07-26T23:00:00-05:00", "2021-07-27T05:00:00-05:00"),
  new Curfew("2021-07-27T23:00:00-05:00", "2021-07-28T05:00:00-05:00"),
  new Curfew("2021-07-28T23:00:00-05:00", "2021-07-29T05:00:00-05:00"),
  new Curfew("2021-07-29T23:00:00-05:00", "2021-07-30T05:00:00-05:00"),
  new Curfew("2021-07-30T23:00:00-05:00", "2021-07-31T05:00:00-05:00"),
  new Curfew("2021-07-31T23:00:00-05:00", "2021-08-01T05:00:00-05:00"),

  // Week of August 01 - August 07
  new Curfew("2021-08-01T18:00:00-05:00", "2021-08-02T05:00:00-05:00"),
  new Curfew("2021-08-02T23:00:00-05:00", "2021-08-03T05:00:00-05:00"),
  new Curfew("2021-08-03T23:00:00-05:00", "2021-08-04T05:00:00-05:00"),
  new Curfew("2021-08-04T23:00:00-05:00", "2021-08-05T05:00:00-05:00"),
  new Curfew("2021-08-05T23:00:00-05:00", "2021-08-06T05:00:00-05:00"),
  new Curfew("2021-08-06T23:00:00-05:00", "2021-08-07T05:00:00-05:00"),
  new Curfew("2021-08-07T23:00:00-05:00", "2021-08-08T05:00:00-05:00"),

  // Week of August 08 - August 11
  new Curfew("2021-08-08T18:00:00-05:00", "2021-08-09T05:00:00-05:00"),
  new Curfew("2021-08-09T23:00:00-05:00", "2021-08-10T05:00:00-05:00"),
  new Curfew("2021-08-10T23:00:00-05:00", "2021-08-11T05:00:00-05:00"),
]

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