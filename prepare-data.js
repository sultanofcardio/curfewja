import {curfews} from "./src/model/data.js"
import fetch from 'node-fetch'
import momentTz from "moment-timezone";
import * as fs from 'fs'

// Write the curfew data to a JSON file to make the data publicly available
const data = curfews.map(it => ({
  start: it.start._i,
  end: it.end._i,
})).reverse()

fs.writeFileSync('public/data.json', JSON.stringify(data))

// Write the last updated time
const URL = `https://api.github.com/repos/sultanofcardio/curfewja/commits?path=${encodeURIComponent('src/model/data.js')}&page=1&per_page=1`
fetch(URL)
  .then(response => response.json())
  .then(json => {
    const lastUpdatedDate = momentTz.tz(json[0].commit.committer.date, 'America/Jamaica')
    fs.writeFileSync('public/last-updated.txt', lastUpdatedDate.format())
  })
  .catch(console.error)
