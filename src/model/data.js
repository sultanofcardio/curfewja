import momentTz from 'moment-timezone'

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
  new Curfew("2021-07-27T20:00:00-05:00", "2021-07-28T05:00:00-05:00"),
  new Curfew("2021-07-28T20:00:00-05:00", "2021-07-29T05:00:00-05:00"),
  new Curfew("2021-07-29T20:00:00-05:00", "2021-07-30T05:00:00-05:00"),
  new Curfew("2021-07-30T20:00:00-05:00", "2021-07-31T05:00:00-05:00"),
  new Curfew("2021-07-31T20:00:00-05:00", "2021-08-01T05:00:00-05:00"),

  // Week of August 01 - August 07
  new Curfew("2021-08-01T15:00:00-05:00", "2021-08-02T05:00:00-05:00"),
  new Curfew("2021-08-02T15:00:00-05:00", "2021-08-03T05:00:00-05:00"),
  new Curfew("2021-08-03T20:00:00-05:00", "2021-08-04T05:00:00-05:00"),
  new Curfew("2021-08-04T20:00:00-05:00", "2021-08-05T05:00:00-05:00"),
  new Curfew("2021-08-05T20:00:00-05:00", "2021-08-06T05:00:00-05:00"),
  new Curfew("2021-08-06T15:00:00-05:00", "2021-08-07T05:00:00-05:00"),
  new Curfew("2021-08-07T20:00:00-05:00", "2021-08-08T05:00:00-05:00"),

  // Week of August 08 - August 14
  new Curfew("2021-08-08T15:00:00-05:00", "2021-08-09T05:00:00-05:00"),
  new Curfew("2021-08-09T20:00:00-05:00", "2021-08-10T05:00:00-05:00"),
  new Curfew("2021-08-10T20:00:00-05:00", "2021-08-11T05:00:00-05:00"),
  new Curfew("2021-08-11T19:00:00-05:00", "2021-08-12T05:00:00-05:00"),
  new Curfew("2021-08-12T19:00:00-05:00", "2021-08-13T05:00:00-05:00"),
  new Curfew("2021-08-13T19:00:00-05:00", "2021-08-14T05:00:00-05:00"),
  new Curfew("2021-08-14T18:00:00-05:00", "2021-08-15T05:00:00-05:00"),

  // Week of August 15 - August 24
  new Curfew("2021-08-15T14:00:00-05:00", "2021-08-16T05:00:00-05:00"),
  new Curfew("2021-08-16T19:00:00-05:00", "2021-08-17T05:00:00-05:00"),
  new Curfew("2021-08-17T19:00:00-05:00", "2021-08-18T05:00:00-05:00"),
  new Curfew("2021-08-18T19:00:00-05:00", "2021-08-19T05:00:00-05:00"),
  new Curfew("2021-08-19T19:00:00-05:00", "2021-08-20T05:00:00-05:00"),
  new Curfew("2021-08-20T21:00:00-05:00", "2021-08-21T05:00:00-05:00"),
  new Curfew("2021-08-21T20:00:00-05:00", "2021-08-25T05:00:00-05:00"),

  // Week of August 25 - August 31
  new Curfew("2021-08-25T19:00:00-05:00", "2021-08-26T05:00:00-05:00"),
  new Curfew("2021-08-26T19:00:00-05:00", "2021-08-27T05:00:00-05:00"),
  new Curfew("2021-08-27T19:00:00-05:00", "2021-08-28T05:00:00-05:00"),
  new Curfew("2021-08-28T18:00:00-05:00", "2021-09-01T05:00:00-05:00"),

  // Week of September 01 - September 07
  new Curfew("2021-09-01T19:00:00-05:00", "2021-09-02T05:00:00-05:00"),
  new Curfew("2021-09-02T19:00:00-05:00", "2021-09-03T05:00:00-05:00"),
  new Curfew("2021-09-03T19:00:00-05:00", "2021-09-04T05:00:00-05:00"),
  new Curfew("2021-09-04T18:00:00-05:00", "2021-09-08T05:00:00-05:00"),

  // Week of September 08 - September 14
  new Curfew("2021-09-08T19:00:00-05:00", "2021-09-09T05:00:00-05:00"),
  new Curfew("2021-09-09T19:00:00-05:00", "2021-09-10T05:00:00-05:00"),
  new Curfew("2021-09-10T19:00:00-05:00", "2021-09-11T05:00:00-05:00"),
  new Curfew("2021-09-11T18:00:00-05:00", "2021-09-15T05:00:00-05:00"),

  // Week of September 15 - September 17
  new Curfew("2021-09-15T19:00:00-05:00", "2021-09-16T05:00:00-05:00"),
  new Curfew("2021-09-16T19:00:00-05:00", "2021-09-17T05:00:00-05:00"),
  new Curfew("2021-09-17T19:00:00-05:00", "2021-09-18T05:00:00-05:00"),

  // Week of September 18 - September 24
  new Curfew("2021-09-18T18:00:00-05:00", "2021-09-20T05:00:00-05:00"),
  new Curfew("2021-09-20T20:00:00-05:00", "2021-09-21T05:00:00-05:00"),
  new Curfew("2021-09-21T20:00:00-05:00", "2021-09-22T05:00:00-05:00"),
  new Curfew("2021-09-22T20:00:00-05:00", "2021-09-23T05:00:00-05:00"),
  new Curfew("2021-09-23T20:00:00-05:00", "2021-09-24T05:00:00-05:00"),
  new Curfew("2021-09-24T20:00:00-05:00", "2021-09-25T05:00:00-05:00"),

  // Week of September 25 - October 01
  new Curfew("2021-09-25T18:00:00-05:00", "2021-09-27T05:00:00-05:00"),
  new Curfew("2021-09-27T20:00:00-05:00", "2021-09-28T05:00:00-05:00"),
  new Curfew("2021-09-28T20:00:00-05:00", "2021-09-29T05:00:00-05:00"),
  new Curfew("2021-09-29T20:00:00-05:00", "2021-09-30T05:00:00-05:00"),
  new Curfew("2021-09-30T20:00:00-05:00", "2021-10-01T05:00:00-05:00"),
  new Curfew("2021-10-01T20:00:00-05:00", "2021-10-02T05:00:00-05:00"),

  // Week of October 02 - October 08
  new Curfew("2021-10-02T18:00:00-05:00", "2021-10-04T05:00:00-05:00"),
  new Curfew("2021-10-04T20:00:00-05:00", "2021-10-05T05:00:00-05:00"),
  new Curfew("2021-10-05T20:00:00-05:00", "2021-10-06T05:00:00-05:00"),
  new Curfew("2021-10-06T20:00:00-05:00", "2021-10-07T05:00:00-05:00"),
  new Curfew("2021-10-07T20:00:00-05:00", "2021-10-08T05:00:00-05:00"),
  new Curfew("2021-10-08T20:00:00-05:00", "2021-10-09T05:00:00-05:00"),

  // Week of October 09 - October 15
  new Curfew("2021-10-09T18:00:00-05:00", "2021-10-11T05:00:00-05:00"),
  new Curfew("2021-10-11T20:00:00-05:00", "2021-10-12T05:00:00-05:00"),
  new Curfew("2021-10-12T20:00:00-05:00", "2021-10-13T05:00:00-05:00"),
  new Curfew("2021-10-13T20:00:00-05:00", "2021-10-14T05:00:00-05:00"),
  new Curfew("2021-10-14T20:00:00-05:00", "2021-10-15T05:00:00-05:00"),
  new Curfew("2021-10-15T20:00:00-05:00", "2021-10-16T05:00:00-05:00"),

  // Week of October 16 - October 22
  new Curfew("2021-10-16T18:00:00-05:00", "2021-10-19T05:00:00-05:00"),
  new Curfew("2021-10-19T20:00:00-05:00", "2021-10-20T05:00:00-05:00"),
  new Curfew("2021-10-20T20:00:00-05:00", "2021-10-21T05:00:00-05:00"),
  new Curfew("2021-10-21T20:00:00-05:00", "2021-10-22T05:00:00-05:00"),
  new Curfew("2021-10-22T20:00:00-05:00", "2021-10-23T05:00:00-05:00"),

  // Week of October 23 - October 29
  new Curfew("2021-10-23T18:00:00-05:00", "2021-10-25T05:00:00-05:00"),
  new Curfew("2021-10-25T20:00:00-05:00", "2021-10-26T05:00:00-05:00"),
  new Curfew("2021-10-26T20:00:00-05:00", "2021-10-27T05:00:00-05:00"),
  new Curfew("2021-10-27T20:00:00-05:00", "2021-10-28T05:00:00-05:00"),
  new Curfew("2021-10-28T20:00:00-05:00", "2021-10-29T05:00:00-05:00"),

  // October 29 - October 31
  new Curfew("2021-10-29T20:00:00-05:00", "2021-10-30T05:00:00-05:00"),
  new Curfew("2021-10-30T20:00:00-05:00", "2021-10-31T05:00:00-05:00"),
  new Curfew("2021-10-31T20:00:00-05:00", "2021-11-01T05:00:00-05:00"),

  // November 01 - November 30
  new Curfew("2021-11-01T20:00:00-05:00", "2021-11-02T05:00:00-05:00"),
  new Curfew("2021-11-02T20:00:00-05:00", "2021-11-03T05:00:00-05:00"),
  new Curfew("2021-11-03T20:00:00-05:00", "2021-11-04T05:00:00-05:00"),
  new Curfew("2021-11-04T20:00:00-05:00", "2021-11-05T05:00:00-05:00"),
  new Curfew("2021-11-05T20:00:00-05:00", "2021-11-06T05:00:00-05:00"),
  new Curfew("2021-11-06T20:00:00-05:00", "2021-11-07T05:00:00-05:00"),
  new Curfew("2021-11-07T20:00:00-05:00", "2021-11-08T05:00:00-05:00"),
  new Curfew("2021-11-08T20:00:00-05:00", "2021-11-09T05:00:00-05:00"),
  new Curfew("2021-11-09T20:00:00-05:00", "2021-11-10T05:00:00-05:00"),
  new Curfew("2021-11-10T20:00:00-05:00", "2021-11-11T05:00:00-05:00"),
  new Curfew("2021-11-11T20:00:00-05:00", "2021-11-12T05:00:00-05:00"),
  new Curfew("2021-11-12T20:00:00-05:00", "2021-11-13T05:00:00-05:00"),
  new Curfew("2021-11-13T20:00:00-05:00", "2021-11-14T05:00:00-05:00"),
  new Curfew("2021-11-14T20:00:00-05:00", "2021-11-15T05:00:00-05:00"),
  new Curfew("2021-11-15T20:00:00-05:00", "2021-11-16T05:00:00-05:00"),
  new Curfew("2021-11-16T20:00:00-05:00", "2021-11-17T05:00:00-05:00"),
  new Curfew("2021-11-17T20:00:00-05:00", "2021-11-18T05:00:00-05:00"),
  new Curfew("2021-11-18T21:00:00-05:00", "2021-11-19T05:00:00-05:00"),
  new Curfew("2021-11-19T21:00:00-05:00", "2021-11-20T05:00:00-05:00"),
  new Curfew("2021-11-20T21:00:00-05:00", "2021-11-21T05:00:00-05:00"),
  new Curfew("2021-11-21T21:00:00-05:00", "2021-11-22T05:00:00-05:00"),
  new Curfew("2021-11-22T21:00:00-05:00", "2021-11-23T05:00:00-05:00"),
  new Curfew("2021-11-23T21:00:00-05:00", "2021-11-24T05:00:00-05:00"),
  new Curfew("2021-11-24T21:00:00-05:00", "2021-11-25T05:00:00-05:00"),
  new Curfew("2021-11-25T21:00:00-05:00", "2021-11-26T05:00:00-05:00"),
  new Curfew("2021-11-26T21:00:00-05:00", "2021-11-27T05:00:00-05:00"),
  new Curfew("2021-11-27T21:00:00-05:00", "2021-11-28T05:00:00-05:00"),
  new Curfew("2021-11-28T21:00:00-05:00", "2021-11-29T05:00:00-05:00"),
  new Curfew("2021-11-29T21:00:00-05:00", "2021-11-30T05:00:00-05:00"),
  new Curfew("2021-11-30T21:00:00-05:00", "2021-12-01T05:00:00-05:00"),

  // December 01 - December 10
  new Curfew("2021-12-01T21:00:00-05:00", "2021-12-02T05:00:00-05:00"),
  new Curfew("2021-12-02T21:00:00-05:00", "2021-12-03T05:00:00-05:00"),
  new Curfew("2021-12-03T21:00:00-05:00", "2021-12-04T05:00:00-05:00"),
  new Curfew("2021-12-04T21:00:00-05:00", "2021-12-05T05:00:00-05:00"),
  new Curfew("2021-12-05T21:00:00-05:00", "2021-12-06T05:00:00-05:00"),
  new Curfew("2021-12-06T21:00:00-05:00", "2021-12-07T05:00:00-05:00"),
  new Curfew("2021-12-07T21:00:00-05:00", "2021-12-08T05:00:00-05:00"),
  new Curfew("2021-12-08T21:00:00-05:00", "2021-12-09T05:00:00-05:00"),
  new Curfew("2021-12-09T21:00:00-05:00", "2021-12-10T05:00:00-05:00"),

  // December 10 - December 24
  new Curfew("2021-12-10T22:00:00-05:00", "2021-12-11T05:00:00-05:00"),
  new Curfew("2021-12-11T22:00:00-05:00", "2021-12-12T05:00:00-05:00"),
  new Curfew("2021-12-12T22:00:00-05:00", "2021-12-13T05:00:00-05:00"),
  new Curfew("2021-12-13T22:00:00-05:00", "2021-12-14T05:00:00-05:00"),
  new Curfew("2021-12-14T22:00:00-05:00", "2021-12-15T05:00:00-05:00"),
  new Curfew("2021-12-15T22:00:00-05:00", "2021-12-16T05:00:00-05:00"),
  new Curfew("2021-12-16T22:00:00-05:00", "2021-12-17T05:00:00-05:00"),
  new Curfew("2021-12-17T22:00:00-05:00", "2021-12-18T05:00:00-05:00"),
  new Curfew("2021-12-18T22:00:00-05:00", "2021-12-19T05:00:00-05:00"),
  new Curfew("2021-12-19T22:00:00-05:00", "2021-12-20T05:00:00-05:00"),
  new Curfew("2021-12-20T22:00:00-05:00", "2021-12-21T05:00:00-05:00"),
  new Curfew("2021-12-21T22:00:00-05:00", "2021-12-22T05:00:00-05:00"),
  new Curfew("2021-12-22T22:00:00-05:00", "2021-12-23T05:00:00-05:00"),
  new Curfew("2021-12-23T22:00:00-05:00", "2021-12-24T05:00:00-05:00"),

  new Curfew("2021-12-25T01:00:00-05:00", "2021-12-25T05:00:00-05:00"),

  new Curfew("2021-12-25T22:00:00-05:00", "2021-12-26T05:00:00-05:00"),
  new Curfew("2021-12-26T22:00:00-05:00", "2021-12-27T05:00:00-05:00"),
  new Curfew("2021-12-27T22:00:00-05:00", "2021-12-28T05:00:00-05:00"),
  new Curfew("2021-12-28T22:00:00-05:00", "2021-12-29T05:00:00-05:00"),
  new Curfew("2021-12-29T22:00:00-05:00", "2021-12-30T05:00:00-05:00"),
  new Curfew("2021-12-30T22:00:00-05:00", "2021-12-31T05:00:00-05:00"),

  // Can't believe this is going into 2022
  new Curfew("2022-01-01T01:00:00-05:00", "2022-01-01T05:00:00-05:00"),

  new Curfew("2022-01-01T22:00:00-05:00", "2022-01-02T05:00:00-05:00"),
  new Curfew("2022-01-02T22:00:00-05:00", "2022-01-03T05:00:00-05:00"),
  new Curfew("2022-01-03T22:00:00-05:00", "2022-01-04T05:00:00-05:00"),
  new Curfew("2022-01-04T22:00:00-05:00", "2022-01-05T05:00:00-05:00"),
  new Curfew("2022-01-05T22:00:00-05:00", "2022-01-06T05:00:00-05:00"),
  new Curfew("2022-01-06T22:00:00-05:00", "2022-01-07T05:00:00-05:00"),
  new Curfew("2022-01-07T22:00:00-05:00", "2022-01-08T05:00:00-05:00"),
  new Curfew("2022-01-08T22:00:00-05:00", "2022-01-09T05:00:00-05:00"),
  new Curfew("2022-01-09T22:00:00-05:00", "2022-01-10T05:00:00-05:00"),
  new Curfew("2022-01-10T22:00:00-05:00", "2022-01-11T05:00:00-05:00"),
  new Curfew("2022-01-11T22:00:00-05:00", "2022-01-12T05:00:00-05:00"),
  new Curfew("2022-01-12T22:00:00-05:00", "2022-01-13T05:00:00-05:00"),
  new Curfew("2022-01-13T22:00:00-05:00", "2022-01-14T05:00:00-05:00"),

  new Curfew("2022-01-14T22:00:00-05:00", "2022-01-15T05:00:00-05:00"),
  new Curfew("2022-01-15T22:00:00-05:00", "2022-01-16T05:00:00-05:00"),
  new Curfew("2022-01-16T22:00:00-05:00", "2022-01-17T05:00:00-05:00"),
  new Curfew("2022-01-17T22:00:00-05:00", "2022-01-18T05:00:00-05:00"),
  new Curfew("2022-01-18T22:00:00-05:00", "2022-01-19T05:00:00-05:00"),
  new Curfew("2022-01-19T22:00:00-05:00", "2022-01-20T05:00:00-05:00"),
  new Curfew("2022-01-20T22:00:00-05:00", "2022-01-21T05:00:00-05:00"),
  new Curfew("2022-01-21T22:00:00-05:00", "2022-01-22T05:00:00-05:00"),
  new Curfew("2022-01-22T22:00:00-05:00", "2022-01-23T05:00:00-05:00"),
  new Curfew("2022-01-23T22:00:00-05:00", "2022-01-24T05:00:00-05:00"),
  new Curfew("2022-01-24T22:00:00-05:00", "2022-01-25T05:00:00-05:00"),
  new Curfew("2022-01-25T22:00:00-05:00", "2022-01-26T05:00:00-05:00"),
  new Curfew("2022-01-26T22:00:00-05:00", "2022-01-27T05:00:00-05:00"),
  new Curfew("2022-01-27T22:00:00-05:00", "2022-01-28T05:00:00-05:00"),
];
