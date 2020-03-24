import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    validation,
    component: Component,
    ...rest
}) => (
    <Route {...rest} render={props => (
        validation ?
            <Component {...props} />
        : <Redirect to="/login" />
    )} />
);

export default PrivateRoute;