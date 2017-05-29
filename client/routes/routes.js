import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { requireAuth } from '../routes/routesGuard';
// components
import NoteDashboad from '../components/Notes/NoteDashboad';

const Routes = () => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <div>
            <Route exact path="/" component={requireAuth(NoteDashboad)} />
          </div>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;