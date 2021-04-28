import {CURFEW_STATUSES} from "../util";

export default class CurfewData {

  /**
   * @type string
   */
  status;

  /**
   * @type string
   */
  detail;

  /**
   * CSS class used to determine background color of the landing page
   * @type string
   */
  statusClass;

  /**
   * Data displayed on the front page when first loaded
   * @param {string} status Main heading on the landing page
   * @param {string} detail Supplemental text on the landing page
   */
  constructor(status, detail) {
    this.status = status
    this.detail = detail

    switch (status) {
      case CURFEW_STATUSES.active:
        this.statusClass = 'curfew-active';
        break;
      case CURFEW_STATUSES.startingSoon:
        this.statusClass = 'almost-curfew';
        break;
      case CURFEW_STATUSES.movementAllowed:
        this.statusClass = 'movement-allowed';
        break;
      case CURFEW_STATUSES.noCurfewToday:
        this.statusClass = 'no-curfew';
        break;
      default:
        this.statusClass = ''
        break;
    }

  }
}