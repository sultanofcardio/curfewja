import 'react-calendar/dist/Calendar.css';
import './Schedule.css'
import Calendar from "react-calendar";
import {useEffect, useState} from "react";
import {findCurfew, getPrevCurfew} from "../../util";
import data from "../../data";
import moment from "moment";
import {GitHubIcon} from "../GitHubIcon";

const Schedule = () => {

  const [date, setDate] = useState(new Date());
  const [curfew, setCurfew] = useState({
    current: findCurfew(date),
    prev: getPrevCurfew(findCurfew(date))
  })

  useEffect(() => {
    setCurfew(prev => {
      const newCurfew = findCurfew(date)
      return {
        current: newCurfew,
        prev: getPrevCurfew(newCurfew)
      }
    })
  }, [date, setCurfew])

  let previousVerbiage = ''
  if (curfew.current && curfew.prev?.end.format("YYYYMMDD") === curfew.current?.date.format("YYYYMMDD")) {
    previousVerbiage = `Previous curfew ends at ${curfew.prev.end.format('h:mma')}`
  }

  let currentVerbiage = 'No restrictions'
  if (curfew.current) {
    currentVerbiage = `Curfew starts at ${curfew.current.start.format('h:mma')} and ends ${curfew.current.end.format('h:mma')} the next day`
  }

  return (
    <div className="schedule-holder">
      <div className="schedule">
        <span className="title">Curfew Schedule</span>
        <span className="subtitle">Choose a day to see the schedule</span>
        <Calendar className='calendar'
                  value={date}
                  minDate={data[0].date.toDate()}
                  maxDate={data[data.length - 1].date.toDate()}
                  onChange={d => setDate(d)}
                  tileClassName='calendar-tile'/>
        <span className="date">{moment(date).format('dddd MMM Do, YYYY')}</span>
        <span className="previous-curfew">{previousVerbiage}</span>
        <span className="current-curfew">{currentVerbiage}</span>
      </div>
      <GitHubIcon/>
    </div>
  )
}

export default Schedule;