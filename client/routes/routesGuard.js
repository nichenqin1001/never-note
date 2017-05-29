import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const requireAuth = ComposedComponent => {
  class AuthGuard extends Component {
    componentWillMount() {

    }

    componentWillUpdate(nextProps) {

    }

    render() {
      console.log(this.props);
      return <ComposedComponent {...this.props} />;
    }
  }

  AuthGuard = createContainer(() => {
    const isAuthenticated = !!Meteor.userId();
    return { isAuthenticated };
  }, AuthGuard);

  AuthGuard = withRouter(AuthGuard);

  return AuthGuard;
};

export const autoRedirectWithAuth = ComposedComponent => {
  class AutoRedirect extends Component {
    componentWillMount() {

    }

    componentWillUpdate(nextProps) {

    }

    render() {
      console.log(this.props);
      return <ComposedComponent {...this.props} />;
    }
  }

  AutoRedirect = createContainer(() => {
    const isAuthenticated = !!Meteor.userId();
    return { isAuthenticated };
  }, AutoRedirect);

  AutoRedirect = withRouter(AutoRedirect);

  return AutoRedirect;
};