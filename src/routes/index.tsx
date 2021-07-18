import React from 'react';
import { Switch } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Management from '../pages/Management';
import UserDashboard from '../pages/Users';
import ForgotPassword from '../pages/ForgotPassword';
import CreateApp from '../pages/CreateApp';

import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/projects/:project+" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/signup" isPrivate component={SignUp} />
    <Route path="/management" exact isPrivate component={Management} />
    <Route path="/users" isPrivate component={UserDashboard} />
    <Route path="/forgot-password" isPrivate component={ForgotPassword} />
    <Route path="/createapp" isPrivate component={CreateApp} />
  </Switch>
);

export default Routes;
