import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { requireAuth, autoRedirectWithAuth } from '../routes/routesGuard';
// components
import NoteDashboad from '../components/Notes/NoteDashboad';
import Feature from '../components/Feature/Feature';
import Signin from '../components/Auth/Signin';
import Signup from '../components/Auth/Signup';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Feature} />
          <Route path="/signin" component={autoRedirectWithAuth(Signin)} />
          <Route path="/signup" component={autoRedirectWithAuth(Signup)} />
          <Route exact path="/notes" component={requireAuth(NoteDashboad)} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;