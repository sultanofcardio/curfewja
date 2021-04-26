import './App.css';
import {getCurfewData} from "./util";
import {useEffect, useState} from "react";
import githubIcon from "./img/github.svg";

function App() {

  const [curfewData, setCurfewData] = useState(getCurfewData())

  useEffect(() => {
    const msUntilNextMinute = 60000 - (new Date().getTime() % 60000)
    setTimeout(() => {
      setCurfewData(getCurfewData())
    }, msUntilNextMinute)
  }, [curfewData])

  return (
    <div className={`App ${curfewData.statusClass}`}>
      <span className="curfew-status">{curfewData.status}</span>
      {
        curfewData.minutesUntilCurfew !== -1 ?
          <span className='curfew-countdown'>00:{curfewData.minutesUntilCurfew.toString().padStart(2, '0')}</span> :
          ''
      }
      <span className="curfew-end-time">{curfewData.detail}</span>
      {/*<button className="curfew-schedule-btn">Curfew schedule</button>*/}
      <a className={'github-icon'} href="https://github.com/sultanofcardio/curfewja" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub link" />
      </a>
    </div>
  );
}

export default App;
