import './App.css';
import {getCurfewData} from "./util";
import {useEffect, useState} from "react";

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
    </div>
  );
}

export default App;
