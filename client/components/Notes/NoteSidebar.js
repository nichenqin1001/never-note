import React from 'react';

const NodeSidebar = () => {
  return (
    <div className="sidebar">
      <button onClick={() => Accounts.logout()}>登出</button>
    </div>
  );
};

export default NodeSidebar;