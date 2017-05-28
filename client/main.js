import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './routes/routes';

Meteor.startup(() => {
  Meteor.loginWithPassword('demo@demo.com', 'demo');
  ReactDOM.render(
    <Routes />,
    document.getElementById('app')
  );
});