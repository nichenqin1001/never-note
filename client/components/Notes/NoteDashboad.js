import React from 'react';
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';

const NoteDashboad = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <NoteList />
    </div>
  );
};

export default NoteDashboad;