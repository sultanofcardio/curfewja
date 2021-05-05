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

const HOURS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]

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

        if (curfew) {
          return (
            <>
              <div className={`${styles.event} ${styles.curfew}`} key={'event' + hour}>
                <span className={styles.hour}>{hourMoment.format('h a')}</span>
                <span className={styles.eventType}>Curfew</span>
              </div>
              {/*<hr />*/}
            </>
          )
        } else {
          return (
            <>
              <div className={`${styles.event} ${styles.movement}`} key={'event' + hour}>
                <span className={styles.hour}>{hourMoment.format('h a')}</span>
                <span className={styles.eventType}>Free Movement</span>
              </div>
              {/*<hr />*/}
            </>
          )
        }
      }
    )

    setEvents(events)
  }, [curfews, setEvents])

  return (
    <div className={styles.root}>
      <Link className={styles.outerBackLink} to='/'>
        <img src={backBtn} className={styles.backBtn} alt={'Github icon'}/>
      </Link>
      <nav className={styles.sidebar}>
        <Link className={styles.innerBackLink} to='/'>
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
        </section>
      </main>
    </div>
  )

  //   <div className="schedule-holder">
  // <div className="schedule">
  // <div className='nav'>
  // <Link className='logo-holder' to='/'>
  // <ArrowLeft/>
  // </Link>
  // <span className="title">Curfew Schedule</span>
  // </div>
  // <span className="subtitle">Choose a day to see the schedule</span>
  // <Calendar className='calendar'
  //               inputRef={calendarRef}
  //               value={date.toDate()}
  //               minDate={allCurfews[0]?.start?.toDate()}
  //               maxDate={allCurfews[allCurfews.length - 1]?.end?.toDate()}
  //               onChange={d => {
  //                 setDate(momentTz.parseZone(d.toISOString().replace('.000Z', '-05:00')))
  //                 if (calendarRef) {
  //                   calendarRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
  //                 }
  //               }}
  //               showFixedNumberOfWeeks={true}
  //               calendarType='US'
  //               tileClassName='calendar-tile'/>
  //     <span className="date">{date.format('dddd MMM Do, YYYY')}</span>
  //     <div className='curfew-schedule'>
  //       <div className='times'>
  //         <div className='time'><span>1 am</span></div>
  //         <div className='time'><span>2 am</span></div>
  //         <div className='time'><span>3 am</span></div>
  //         <div className='time'><span>4 am</span></div>
  //         <div className='time'><span>5 am</span></div>
  //         <div className='time'><span>6 am</span></div>
  //         <div className='time'><span>7 am</span></div>
  //         <div className='time'><span>8 am</span></div>
  //         <div className='time'><span>9 am</span></div>
  //         <div className='time'><span>10 am</span></div>
  //         <div className='time'><span>11 am</span></div>
  //         <div className='time'><span>12 pm</span></div>
  //         <div className='time'><span>1 pm</span></div>
  //         <div className='time'><span>2 pm</span></div>
  //         <div className='time'><span>3 pm</span></div>
  //         <div className='time'><span>4 pm</span></div>
  //         <div className='time'><span>5 pm</span></div>
  //         <div className='time'><span>6 pm</span></div>
  //         <div className='time'><span>7 pm</span></div>
  //         <div className='time'><span>8 pm</span></div>
  //         <div className='time'><span>9 pm</span></div>
  //         <div className='time'><span>10 pm</span></div>
  //         <div className='time'><span>11 pm</span></div>
  //         <div className='time'><span>12 am</span></div>
  //       </div>
  //       <div className='events'>
  //         {events}
  //       </div>
  //     </div>
  //   </div>
  //   <GitHubIcon className='gh-icon'/>
  // </div>
  // )
}

export default Schedule;