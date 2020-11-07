import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Management from '../pages/Management';
import UserDashboard from '../pages/Users';

// import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/projects/:project+" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/signup" isPrivate component={SignUp} />
    <Route path="/management" isPrivate component={Management} />
    <Route path="/users" isPrivate component={UserDashboard} />
  </Switch>
);

export default Routes;
