import React from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';
import classnames from 'classnames';

const NodeSidebar = props => {
  return (
    <div className={classnames("sidebar", { "hidden": props.isFullScreen })}>
      <Link className="sidebar__header" to="/">
        <img src="/images/notebook.png" width="100%" alt="" />
      </Link>
      <div className="sidebar__tools">
        <i onClick={() => Meteor.call('notes.insert')} className="fa fa-plus-circle fa-2x"></i>
      </div>
      <i className="fa fa-cog fa-2x mt-auto" onClick={() => Accounts.logout()}></i>
    </div>
  );
};

export default NodeSidebar;
