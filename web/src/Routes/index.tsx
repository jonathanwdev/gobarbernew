import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact component={SignIn} path="/" />
      <Route component={SignUp} path="/signup" />
      <Route component={ForgotPassword} path="/forgot-password" />
      <Route component={ResetPassword} path="/reset-password" />

      <Route component={Profile} path="/profile" isPrivate />
      <Route component={Dashboard} path="/dashboard" isPrivate />
    </Switch>
  );
};

export default Routes;
