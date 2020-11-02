import React from 'react';
import {
    Route as ReactDOMRoute,
    RouteProps as ReactDOMRouteProps,
    Redirect
  } from 'react-router-dom';

import { useAuth } from '../hooks/AuthContext';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, isPrivate = false, ...rest }) => {

  const { user } = useAuth();

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) =>
        !!user === isPrivate ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: !(isPrivate && !!user) ? '/' : '/home', state: { from: location } }}/>
        )
      }
    />
  );
}

export default Route;
