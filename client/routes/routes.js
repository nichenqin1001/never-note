import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { requireAuth, autoRedirectWithAuth } from '../routes/routesGuard';
// components
import NoteDashboad from '../components/Notes/NoteDashboad';
import Feature from '../components/Feature/Feature';
import Signin from '../components/Auth/Signin';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <div>
            <Route exact path="/" component={Feature} />
            <Route path="/signin" component={autoRedirectWithAuth(Signin)} />
            <Route exact path="/notes" component={requireAuth(NoteDashboad)} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;