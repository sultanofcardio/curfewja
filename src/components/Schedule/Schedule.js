/* eslint-disable react-hooks/exhaustive-deps */
// import 'react-calendar/dist/Calendar.css';
import './calendar.css'
import styles from './Schedule.module.css'
import Calendar from "react-calendar";
import {useEffect, useRef, useState} from "react";
import {GitHubIcon} from "../GitHubIcon";
import {Link} from "react-router-dom";
import backBtn from '../../img/back.webp';
import {curfews as allCurfews, findCurfews, TIME_ZONE} from "../../model/Curfew";
import momentTz from "moment-timezone";

/**
 *
 * @typedef {'Curfew'|'Movement'} EventType
 */

const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

/**
 * Create a new Event component
 * @param {number} hour
 * @param {moment.Moment} moment
 * @param {EventType} type
 * @return {JSX.Element}
 * @constructor
 */
const ScheduleEvent = ({time, type}) => {

  const style = type === 'Curfew' ? styles.curfew : styles.movement

  return (
    <div className={`${styles.event} ${style}`}>
      <span className={styles.hour}>{time}</span>
      <span className={styles.eventType}>{type}</span>
    </div>
  )
}

const Attribution = ({className}) => (
  <span className={className}>
    <em>Design by <a href='https://www.instagram.com/shanesejohnsonthebrand/' target='_blank'
                     rel='noreferrer'>@shanesejohnsonthebrand</a>
    </em>
  </span>
)

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
    const events = HOURS.map(hour => {
        const hourMoment = date.hour(hour).minute(1)
        const
          curfew = sorted.find(it => {
            return hourMoment.isBetween(it.start, it.end)
          })

        return (
          <ScheduleEvent time={hourMoment.format('h a')} type={curfew ? 'Curfew' : 'Movement'} key={'event' + hour}/>
        )
      }
    )

    setEvents(events)
  }, [curfews, setEvents])

  return (
    <div className={styles.root}>
      <Link className={styles.outerBackLink} key='outerBackLink' to='/'>
        <img src={backBtn} className={styles.backBtn} alt={'Github icon'}/>
      </Link>
      <nav className={styles.sidebar}>
        <Link className={styles.innerBackLink} key='innerBackLink' to='/'>
          <img src={backBtn} className={styles.backBtn} alt={'Github icon'}/>
        </Link>
        <GitHubIcon className={styles.ghIcon}/>
        <ul className={styles.months}>
          <li className={styles.month}>January</li>
          <li className={styles.month}>February</li>
          <li className={styles.month}>March</li>
          <li className={styles.month}>April</li>
          <li className={`${styles.month} ${styles.selected}`}>May</li>
          <li className={styles.month}>June</li>
          <li className={styles.month}>July</li>
          <li className={styles.month}>August</li>
          <li className={styles.month}>September</li>
          <li className={styles.month}>October</li>
          <li className={styles.month}>November</li>
          <li className={styles.month}>December</li>
        </ul>
      </nav>
      <main className={styles.main}>
        <section className={styles.calendar}>
          <h1>Curfew Schedule</h1>
          <h3>Choose a day to see the schedule</h3>
          <Calendar inputRef={calendarRef}
                    value={date.toDate()}
                    minDate={allCurfews[0]?.start?.toDate()}
                    maxDate={allCurfews[allCurfews.length - 1]?.end?.toDate()}
                    onChange={d => {
                      setDate(momentTz.parseZone(d.toISOString().replace('.000Z', '-05:00')))
                      if (calendarRef) {
                        calendarRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
                      }
                    }}
                    showFixedNumberOfWeeks={true}
                    calendarType='US'
                    tileClassName='calendar-tile'/>
          <Attribution className={styles.calendarAttribution} />
        </section>
        <section className={styles.schedule}>
          <div className={styles.date}>
            <span className={styles.dateSelected}>{date.format('dddd MMM Do')}</span>
            {
              momentTz.tz(TIME_ZONE).dayOfYear() === date.dayOfYear() ?
                <span>Today</span> : ''
            }
          </div>
          <div className={styles.events}>
            {events}
          </div>
          <Attribution className={styles.scheduleAttribution} />
        </section>
      </main>
    </div>
  )
}

export default Schedule;