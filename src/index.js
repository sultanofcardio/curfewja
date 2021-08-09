import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home/Home';
import {ContextProvider} from "./util/context";
import Schedule from "./components/Schedule/Schedule";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Switch>
          <Route path="/schedule">
            <Schedule/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
