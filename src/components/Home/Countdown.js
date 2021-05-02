import {Context} from "../../util/context";
import {useContext, useEffect, useState} from "react";
import momentTz from "moment-timezone";
import {CurfewData, TIME_ZONE} from "../../model/Curfew";

export const Countdown = () => {
  const {setCurfewData} = useContext(Context)
  const curfew = new CurfewData(momentTz.tz(TIME_ZONE)).curfew

  // Number of seconds to the curfew
  const [offset, setOffset] = useState(curfew?.start?.diff(momentTz.tz(TIME_ZONE), 'seconds') + 1)

  useEffect(() => {
    const msUntilNextSecond = 1000 - new Date().getMilliseconds();

    if (offset > 0) {
      setTimeout(() => {
        setOffset(prev => prev - 1)
        setCurfewData(new CurfewData(momentTz.tz(TIME_ZONE)))
      }, msUntilNextSecond)
    }
  }, [offset])

  if (!curfew || isNaN(offset) || (offset / 60) > 60 || offset <= 0) {
    return (<></>)
  }

  const minutes = Math.floor(offset / 60).toFixed(0).padStart(2, '0')
  const seconds = (offset % 60).toString().padStart(2, '0')

  return (<span className='curfew-countdown'>{minutes}:{seconds}</span>)
}