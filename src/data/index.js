// eslint-disable-next-line no-unused-vars
import Curfew from "../model/Curfew";

/**
 * @type {Array<Curfew>}
 */
const data = [
  // Week of April 25 - May 01
  new Curfew("2021-04-25", "2021-04-25 14:00", "2021-04-26 05:00"),
  new Curfew("2021-04-26", "2021-04-26 20:00", "2021-04-27 05:00"),
  new Curfew("2021-04-27", "2021-04-27 20:00", "2021-04-28 05:00"),
  new Curfew("2021-04-28", "2021-04-28 20:00", "2021-04-29 05:00"),
  new Curfew("2021-04-29", "2021-04-29 20:00", "2021-04-30 05:00"),
  new Curfew("2021-04-30", "2021-04-30 20:00", "2021-05-01 05:00"),
  new Curfew("2021-05-01", "2021-05-01 16:00", "2021-05-02 05:00"),

  // Week of May 02 - May 08
  new Curfew("2021-05-02", "2021-05-02 14:00", "2021-05-03 05:00"),
  new Curfew("2021-05-03", "2021-05-03 20:00", "2021-05-04 05:00"),
  new Curfew("2021-05-04", "2021-05-04 20:00", "2021-05-05 05:00"),
  new Curfew("2021-05-05", null, null),
]

export default data;