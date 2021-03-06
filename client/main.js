import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import Routes from './routes/routes';

import reducer from './reducers';

import 'github-markdown-css/github-markdown.css';
import 'highlight.js/styles/github.css';

const createStoreWithMiddleware = applyMiddleware()(createStore);

Meteor.startup(() => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
      <Routes />
    </Provider>,

    document.getElementById('app')
  );
});