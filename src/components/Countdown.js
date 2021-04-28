import {Context} from "../context";
import {useContext, useEffect, useState} from "react";
import moment from "moment";
import {getCurfewData, getCurrentCurfew} from "../util";

export const Countdown = () => {
  const {setCurfewData} = useContext(Context)
  const curfew = getCurrentCurfew()
  const [offset, setOffset] = useState(curfew?.start?.diff(moment().utcOffset(-5), 'seconds') + 1)

  useEffect(() => {
    const msUntilNextSecond = 1000 - new Date().getMilliseconds();

    if (offset > 0) {
      setTimeout(() => {
        setOffset(prev => prev - 1)
        setCurfewData(getCurfewData())
      }, msUntilNextSecond)
    }
  }, [offset])

  if (curfew === null || (offset / 60) > 60 || offset <= 0) {
    return (<></>)
  }

  const minutes = Math.floor(offset / 60).toFixed(0).padStart(2, '0')
  const seconds = (offset % 60).toString().padStart(2, '0')

  console.log("Offset:", offset, "Minutes:", minutes, "Seconds:", seconds)

  return (<span className='curfew-countdown'>{minutes}:{seconds}</span>)
}