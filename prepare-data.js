import {curfews} from "./src/model/Curfew.js"
import * as fs from 'fs'

const data = curfews.map(it => ({
  start: it.start._i,
  end: it.end._i,
})).reverse()

fs.writeFileSync('public/data.json', JSON.stringify(data))
