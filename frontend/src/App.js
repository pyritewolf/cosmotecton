import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import LogIn from 'views/LogIn'
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
