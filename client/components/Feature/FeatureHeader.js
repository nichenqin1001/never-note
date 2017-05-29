import React, { Component } from 'react';
import classnames from 'classnames';

class FeatureHeader extends Component {
  renderAuthButtons() {
    const { isAuthenticated } = this.props;


    return isAuthenticated
      ? <button className="button button__mini button__danger">退出</button>
      : <button className="button button__mini">登录</button>;
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