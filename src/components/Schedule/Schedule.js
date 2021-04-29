import 'react-calendar/dist/Calendar.css';
import './Schedule.css'
import Calendar from "react-calendar";
import {useEffect, useState} from "react";
import {findCurfew, getPrevCurfew} from "../../util";
import data from "../../data";
import moment from "moment";
import {GitHubIcon} from "../GitHubIcon";
import CurfewLine from "./CurfewLine";

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
                  showFixedNumberOfWeeks={true}
                  calendarType='US'
                  tileClassName='calendar-tile'/>
        <span className="date">{moment(date).format('dddd MMM Do, YYYY')}</span>
        <CurfewLine end={curfew.prev?.end}
                    start={curfew?.current.start}/>
        <GitHubIcon className="schedule-github-icon" />
      </div>
    </div>
  )
}

export default Schedule;