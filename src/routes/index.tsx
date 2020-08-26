import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Applications from '../pages/Applications';
import Login from '../pages/Login';
import Management from '../pages/Management';
import FormCreateApp from '../pages/FormCreateApp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/projects/:project+" component={Applications} />
    <Route path="/login" component={Login} />
    <Route path="/management" component={Management} />
    <Route path="/createapp" component={FormCreateApp} />
  </Switch>
);

export default Routes;
