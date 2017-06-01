import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// collections
import { Notes } from '../../../imports/collections/notes';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

class NoteDashboad extends Component {
  render() {
    const { isFullScreen, match } = this.props;
    return (
      <div className="dashboard">
        <Sidebar isFullScreen={isFullScreen} />
        <NoteList {...this.props} />
        <Route exact path={`${match.path}`} component={NoteEditor} />
        <Route path={`${match.path}/:_id`} component={NoteEditor} />
      </div>
    );
  }
};

NoteDashboad = connect(({ isFullScreen, searchText }) => ({ isFullScreen, searchText }))(NoteDashboad);

NoteList = createContainer(props => {
  const notesHandle = Meteor.subscribe('notes');
  const loading = !notesHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = Notes
    .find(
    {
      '$where': function () {
        return (this.title.indexOf(props.searchText) !== -1 || this.content.indexOf(props.searchText) !== -1);
      }
    },
    { sort: { updatedAt: -1 } }
    )
    .fetch();
  const notesCount = notes.length;
  return { notes, loading, noteExists, notesCount };
}, NoteList);

export default NoteDashboad;
