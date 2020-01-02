import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import LogIn from './views/LogIn'
import logo from './logo.svg';
import styles from  './App.module.scss';


function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
