import React, { Component } from 'react';
import { Accounts } from 'meteor/accounts-base';
import { withRouter } from 'react-router-dom';
import { Notes } from '../../../imports/collections/notes';
import _ from 'lodash';

class FeatureMain extends Component {
  onDemoLogin() {
    Accounts.logout(() => {
      Meteor.loginWithPassword('demo@demo.com', 'demo', () => {
        if (!Notes.find().count()) {
          _.times(10, () => {
            Meteor.call('notes.insert');
          });
        }
        this.props.history.replace('/notes');
      });
    });
  }

  render() {
    return (
      <div className="feature__main">
        <h1 className="feature__main-header">Never Note</h1>
        <p className="feature__main-content">我们的目标是：不记笔记！</p>
        <div className="flex flex__center">
          <i className="fa fa-chevron-right fa-3x animated bounceInLeft"></i>
          <button style={{ margin: '0 30px' }} onClick={this.onDemoLogin.bind(this)} className="button button__large button__focus">Live Demo</button>
          <i className="fa fa-chevron-left fa-3x animated bounceInRight"></i>
        </div>
        <div className="feature__main-description">
          <img width="256" height="236" src="/images/notebook.png" alt="" />
        </div>
      </div>
    );
  }
}

FeatureMain = withRouter(FeatureMain);

export default FeatureMain;