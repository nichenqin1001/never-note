import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FeatureHeader extends Component {
  renderAuthButtons() {
    const { isAuthenticated } = this.props;


    return isAuthenticated
      ? <button className="button button__mini button__danger">退出</button>
      : (
        <div>
          <Link type="button" to="/signin" className="button button__mini">登录</Link>
          <Link type="button" to="/signup" className="button button__mini">注册</Link>
        </div>
      );

  }

  render() {
    return (
      <div className="feature__header">
        <div className="feature__header__brand">
          <h2>Never Note</h2>
        </div>
        <div className="feature__header__auth ml-auto">
          {this.renderAuthButtons()}
        </div>
      </div>
    );
  }
}

export default FeatureHeader;