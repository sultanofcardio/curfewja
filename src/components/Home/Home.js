import './Home.css';
import {useContext, useEffect, useState} from "react"
import {Countdown} from "./Countdown";
import {Context} from "../../util/context";
import {Link} from "react-router-dom";
import {GitHubIcon} from "../GitHubIcon";
import ReactTooltip from 'react-tooltip'
import momentTz from 'moment-timezone'
import infoIcon from '../../img/info-circle.svg'
import {TIME_ZONE} from '../../model/Curfew'

function Home() {

  const [lastUpdatedDate, setLastUpdated] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const response = await window.fetch('/last-updated.txt')
        const dateString = await response.text()
        setLastUpdated(dateString)
      } catch (e){}
    }
    getData()
  }, [])

  const {
    state: {
      /**
       * @type CurfewData
       */
      curfewData
    }
  } = useContext(Context)

  const verbiage = lastUpdatedDate ? `Last updated ${momentTz.tz(TIME_ZONE).to(lastUpdatedDate)}` : 'Last updated info unavailable'

  return (
    <div className={`App ${curfewData.status.class}`}>
      <span className="curfew-status">{curfewData.status.title}</span>
      <Countdown />
      <span className="curfew-end-time">{curfewData.detail}</span>
      <Link to="/schedule" className="curfew-schedule-btn">View schedule</Link>
      <img className='curfew-info-icon'
           src={infoIcon}
           data-tip={verbiage}
           alt={verbiage} />
      <ReactTooltip />
      <GitHubIcon/>
    </div>
  );
}

export default Home;
