import React, { Fragment, useContext, useEffect} from 'react';
import { connect, useSelector } from 'react-redux';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Story from 'views/Story';
import { NavBar, PrivateRoute } from 'components/general';
import { WorldProvider, store } from 'contexts/world';

import styles from './styles.module.scss';

function WorldComponent() {
  const {params} = useRouteMatch("/:worldId");
  const context = useContext(store);
  const {dispatch, world} = context;

  useEffect(() => {
    dispatch({type: 'FETCH_WORLD', payload: params.worldId});
  }, [dispatch, params.worldId])

  return <Fragment>
    <NavBar />
    <div>this is a world with id {params.worldId} / {world && world.name}</div>
  </Fragment>
}

function World() {
  const user = useSelector(state => state.auth);
  return (
    <WorldProvider>
      <Switch>
        <PrivateRoute validation={user.token} component={Story} path="/:worldId/story/:storyId" />
        <Route component={WorldComponent} strict path="/" />
        </Switch>
    </WorldProvider>
  );
}

export default connect()(World);