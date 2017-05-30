import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

class NoteDashboad extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="dashboard">
        <Sidebar />
        <NoteList />
        <Route path={`${this.props.match.path}/:_id`} component={NoteEditor} />
      </div>
    );
  }
};

NoteDashboad = connect(({ isFullScreen }) => ({ isFullScreen }))(NoteDashboad);

export default NoteDashboad;