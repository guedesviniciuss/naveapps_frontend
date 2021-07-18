import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  isAuth?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  isAuth = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  const authenticated = !!user;
  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        if (isPrivate === !!user) {
          return <Component />;
        }

        if (!isPrivate) {
          return (
            <Redirect
              to={{
                pathname: isPrivate ? '/login' : '/management',
                state: { from: location },
              }}
            />
          );
        }
        if (isAuth === authenticated) {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default Route;
