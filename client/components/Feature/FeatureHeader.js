import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Accounts } from 'meteor/accounts-base';
import { Link } from 'react-router-dom';

class FeatureHeader extends Component {
  renderAuthButtons() {
    const { isAuthenticated, email } = this.props;

    return isAuthenticated
      ? (
        <div>
          <Link to="/notes" >{email}</Link>
          <button onClick={() => Accounts.logout()} className="button button__mini button__danger">退出</button>
        </div>)
      : (
        <div>
          <Link type="button" to="/signin" className="button button__mini">登录</Link>
          <Link type="button" to="/signup" className="button button__mini">注册</Link>
        </div>);

  }

  render() {
    return (
      <div className="feature__header">
        <div className="feature__header__brand">
          <Link to="/notes">
            <img height="100%" src="/images/notebook.png" alt="notebook" />
          </Link>
        </div>
        <div className="feature__header__auth ml-auto">
          {this.renderAuthButtons()}
        </div>
      </div>
    );
  }
}

FeatureHeader = createContainer(() => {
  const isAuthenticated = !!Meteor.user();
  const email = isAuthenticated ? Meteor.user().emails[0].address : '';
  return { isAuthenticated, email };
}, FeatureHeader);

export default FeatureHeader;
