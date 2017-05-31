import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

class NoteDashboad extends Component {
  render() {
    const { isFullScreen } = this.props;
    return (
      <div className="dashboard">
        <Sidebar isFullScreen={isFullScreen} />
        <NoteList isFullScreen={isFullScreen} />
        <Route exact path={`${this.props.match.path}`} component={NoteEditor} />
        <Route path={`${this.props.match.path}/:_id`} component={NoteEditor} />
      </div>
    );
  }
};

NoteDashboad = connect(({ isFullScreen }) => ({ isFullScreen }))(NoteDashboad);

export default NoteDashboad;
