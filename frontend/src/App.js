import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { PrivateRoute } from 'components/general'
import LogIn from 'views/LogIn'
import Home from 'views/Home';

import styles from  './App.module.scss';


function App() {
  return (
    <div className={styles.root}>
      <Router>
        <Switch>
          <Route path="/login" component={LogIn} />
          <PrivateRoute validation={1} component={Home} path="/" strict />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
