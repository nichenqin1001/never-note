import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { connect } from 'react-redux';
import classnames from 'classnames';
// components
import TagSearchList from './Tags/TagSearchList';

class NoteSidebar extends Component {
  render() {

    return (
      <div className={classnames("sidebar", { "hidden": this.props.isFullScreen })}>
        <Link className="sidebar__header" to="/">
          <img src="/images/notebook.png" width="100%" alt="" />
        </Link>
        <div className="sidebar__tools">
          <i onClick={() => Meteor.call('notes.insert')} className="fa fa-plus-circle fa-2x"></i>
          <i className="fa fa-tags fa-2x"></i>
        </div>
        <i className="fa fa-cog fa-2x mt-auto" onClick={() => Accounts.logout()}></i>
        <TagSearchList />
      </div>
    );
  }
};

NoteSidebar = connect(({ isFullScreen }) => ({ isFullScreen }))(NoteSidebar);

export default NoteSidebar;
