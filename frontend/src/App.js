import React from 'react';
import {
  Router,
  Switch,
  Route
} from "react-router-dom";
import { useSelector } from 'react-redux';

import { PrivateRoute } from 'components/general'
import LogIn from 'views/LogIn'
import Home from 'views/Home';
import World from 'views/World';

import history from './history';
import styles from  './App.module.scss';


function App() {
  const user = useSelector(state => state.auth)
  return (
    <div className={styles.root}>
      <Router history={history}>
        <Switch>
          <Route path="/login" component={LogIn} />
          <Route component={World} path="/:worldId" />
          <PrivateRoute validation={user.token} component={Home} path="/" strict />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
