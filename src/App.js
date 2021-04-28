import './App.css';
import {useContext} from "react";
import githubIcon from "./img/github.svg";
import {Countdown} from "./components/Countdown";
import {Context} from "./context";

function App() {

  const {state: {curfewData}} = useContext(Context)

  return (
    <div className={`App ${curfewData.statusClass}`}>
      <span className="curfew-status">{curfewData.status}</span>
      <Countdown/>
      <span className="curfew-end-time">{curfewData.detail}</span>
      {/*<button className="curfew-schedule-btn">Curfew schedule</button>*/}
      <a className={'github-icon'} href="https://github.com/sultanofcardio/curfewja" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub link"/>
      </a>
    </div>
  );
}

export default App;
