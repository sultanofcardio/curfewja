import './Home.css';
import {useContext} from "react";
import githubIcon from "../../img/github.svg";
import {Countdown} from "./Countdown";
import {Context} from "../../util/context";
import {Link} from "react-router-dom";

function Home() {

  const {state: {curfewData}} = useContext(Context)

  return (
    <div className={`App ${curfewData.statusClass}`}>
      <span className="curfew-status">{curfewData.status}</span>
      <Countdown/>
      <span className="curfew-end-time">{curfewData.detail}</span>
      <Link to="/schedule" className="curfew-schedule-btn">Curfew schedule</Link>
      <a className={'github-icon'} href="https://github.com/sultanofcardio/curfewja" target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="GitHub link"/>
      </a>
    </div>
  );
}

export default Home;
