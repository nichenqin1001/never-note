import React from 'react';
import { Accounts } from 'meteor/accounts-base';

const NodeSidebar = () => {
  return (
    <div className="sidebar">
      <button onClick={() => Accounts.logout()}>登出</button>
    </div>
  );
};

export default NodeSidebar;