import React from 'react';
import { Route } from 'react-router-dom';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

const NoteDashboad = (props) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <NoteList />
      <Route path={`${props.match.path}/:_id`} component={NoteEditor} />
    </div>
  );
};

export default NoteDashboad;