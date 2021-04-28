import moment from "moment";

export default class Curfew {

  /**
   * @type moment.Moment
   */
  date;

  /**
   * @type moment.Moment
   */
  start;

  /**
   * @type moment.Moment
   */
  end;

  /**
   * @type boolean
   */
  noMovementDay = false

  /**
   * Create a new Curfew object
   * @param {string} date
   * @param {string} start
   * @param {string} end
   * @param {boolean} noMovementDay
   */
  constructor(date, start, end, noMovementDay = false) {
    this.date = moment(date).utcOffset(-5)
    this.start = moment(start).utcOffset(-5)
    this.end = moment(end).utcOffset(-5)
    this.noMovementDay = noMovementDay
  }
}
