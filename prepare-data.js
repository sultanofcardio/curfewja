import {curfews} from "./src/model/data.js"
import * as fs from 'fs'

// Write the curfew data to a JSON file to make the data publicly available
const data = curfews.map(it => ({
  start: it.start._i,
  end: it.end._i,
})).reverse()

fs.writeFileSync('public/data.json', JSON.stringify(data))
