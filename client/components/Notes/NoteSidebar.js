import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import classnames from 'classnames';

const NodeSidebar = (props) => {
  return (
    <div className={classnames("sidebar", { "hidden": props.isFullScreen })}>
      <button onClick={() => Accounts.logout()}>登出</button>
    </div>
  );
};

export default NodeSidebar;