import 'react-calendar/dist/Calendar.css';
import './Schedule.css'
import Calendar from "react-calendar";
import {useEffect, useRef, useState} from "react";
import {GitHubIcon} from "../GitHubIcon";
import {Link} from "react-router-dom";
import {ArrowLeft} from "react-feather";
import {curfews as allCurfews, findCurfews, TIME_ZONE} from "../../model/Curfew";
import momentTz from "moment-timezone";

const Schedule = () => {

  const [date, setDate] = useState(momentTz.tz(TIME_ZONE));
  const [curfews, setCurfews] = useState(findCurfews(date))
  const [events, setEvents] = useState([])
  const calendarRef = useRef(null)

  useEffect(() => {
    setCurfews(findCurfews(date))
  }, [date, setCurfews])

  useEffect(() => {
    const sorted = curfews.sort((a, b) => a.start.diff(b.start))
    const data = []

    for (let i = 0; i < 24; i++) {
      const curfew = sorted.find(it => {
        return date.hour(i).minute(1).isBetween(it.start, it.end)
      })
      if (curfew) {
        if (data.length === 0 || data[data.length - 1][0] !== 'curfew') {
          data.push(['curfew'])
        } else {
          data[data.length - 1].push('curfew')
        }
      } else {
        if (data.length === 0 || data[data.length - 1][0] !== 'movement') {
          data.push(['movement'])
        } else {
          data[data.length - 1].push('movement')
        }
      }
    }

    setEvents(data.map((it, i) => {
      if (it[0] === 'curfew') {
        return (
          <div className='curfew' key={'curfew' + i}>
            {it.map((_, j) => <div className='event' key={'curfew-event' + j}/>)}
            <span className='name' key={'curfew-name' + i}>Curfew</span>
          </div>
        )
      } else {
        return (
          <div className='movement' key={'movement' + i}>
            {it.map((_, j) => <div className='event' key={'movement-event' + j}/>)}
            <span className='name' key={'movement-name' + i}>Free Movement</span>
          </div>
        )
      }
    }))
  }, [curfews, setEvents])

  return (
    <div className="schedule-holder">
      <div className="schedule">
        <div className='nav'>
          <Link className='logo-holder' to='/'>
            <ArrowLeft/>
          </Link>
          <span className="title">Curfew Schedule</span>
        </div>
        <span className="subtitle">Choose a day to see the schedule</span>
        <Calendar className='calendar'
                  inputRef={calendarRef}
                  value={date.toDate()}
                  minDate={allCurfews[0]?.start?.toDate()}
                  maxDate={allCurfews[allCurfews.length - 1]?.end?.toDate()}
                  onChange={d => {
                    setDate(momentTz.parseZone(d))
                    if (calendarRef) {
                      calendarRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                    }
                  }}
                  showFixedNumberOfWeeks={true}
                  calendarType='US'
                  tileClassName='calendar-tile'/>
        <span className="date">{date.format('dddd MMM Do, YYYY')}</span>
        <div className='curfew-schedule'>
          <div className='times'>
            <div className='time'><span>1 am</span></div>
            <div className='time'><span>2 am</span></div>
            <div className='time'><span>3 am</span></div>
            <div className='time'><span>4 am</span></div>
            <div className='time'><span>5 am</span></div>
            <div className='time'><span>6 am</span></div>
            <div className='time'><span>7 am</span></div>
            <div className='time'><span>8 am</span></div>
            <div className='time'><span>9 am</span></div>
            <div className='time'><span>10 am</span></div>
            <div className='time'><span>11 am</span></div>
            <div className='time'><span>12 pm</span></div>
            <div className='time'><span>1 pm</span></div>
            <div className='time'><span>2 pm</span></div>
            <div className='time'><span>3 pm</span></div>
            <div className='time'><span>4 pm</span></div>
            <div className='time'><span>5 pm</span></div>
            <div className='time'><span>6 pm</span></div>
            <div className='time'><span>7 pm</span></div>
            <div className='time'><span>8 pm</span></div>
            <div className='time'><span>9 pm</span></div>
            <div className='time'><span>10 pm</span></div>
            <div className='time'><span>11 pm</span></div>
            <div className='time'><span>12 am</span></div>
          </div>
          <div className='events'>
            {events}
          </div>
        </div>
      </div>
      <GitHubIcon className='gh-icon'/>
    </div>
  )
}

export default Schedule;