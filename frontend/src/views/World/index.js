import React, { Fragment, useContext, useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Story from 'views/Story';
import { NavBar, PrivateRoute } from 'components/general';
import { WorldProvider, store } from 'contexts/world';

import styles from './styles.module.scss';

function WorldComponent() {
  const {world} = useContext(store);

  return <Fragment>
    <NavBar />
    <div>this is a world: {world && world.name}</div>
  </Fragment>
}

function WorldRouter() {
  const user = useSelector(state => state.auth);
  const {params} = useRouteMatch("/:worldId");
  const {dispatch} = useContext(store);

  useEffect(() => {
    dispatch({type: 'FETCH_WORLD', payload: params.worldId});
  }, [dispatch, params.worldId])

  return <Switch>
    <PrivateRoute validation={user.token} component={Story} path="/:worldId/story/:storyId" />
    <Route component={WorldComponent} strict path="/" />
  </Switch>
}

function World() {
  return (
    <WorldProvider>
      <WorldRouter />
    </WorldProvider>
  );
}

export default connect()(World);