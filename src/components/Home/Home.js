import './Home.css';
import {useContext} from "react";
import {Countdown} from "./Countdown";
import {Context} from "../../util/context";
import {Link} from "react-router-dom";
import {GitHubIcon} from "../GitHubIcon";

function Home() {

  const {state: {curfewData}} = useContext(Context)

  return (
    <div className={`App ${curfewData.statusClass}`}>
      <span className="curfew-status">{curfewData.status}</span>
      <Countdown/>
      <span className="curfew-end-time">{curfewData.detail}</span>
      <Link to="/schedule" className="curfew-schedule-btn">Curfew schedule</Link>
      <GitHubIcon/>
    </div>
  );
}

export default Home;