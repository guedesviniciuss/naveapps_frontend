import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import Management from '../pages/Management';
import FormCreateApp from '../pages/FormCreateApp';
import UserDashboard from '../pages/Users';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/projects/:project+" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={SignUp} />
    <Route path="/management" component={Management} />
    <Route path="/createapp" component={FormCreateApp} />
    <Route path="/users" component={UserDashboard} />
  </Switch>
);

export default Routes;
