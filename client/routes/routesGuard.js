import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

export const requireAuth = ComposedComponent => {
  class AuthGuard extends Component {
    componentWillMount() {
      if (!this.props.isAuthenticated) this.props.history.push('/');
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isAuthenticated) this.props.history.push('/');
    }

    render() {
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
      if (this.props.isAuthenticated) this.props.history.push('/notes');
    }

    componentWillUpdate(nextProps) {
      if (nextProps.isAuthenticated) this.props.history.push('/notes');
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