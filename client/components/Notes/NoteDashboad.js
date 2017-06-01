import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createContainer } from 'meteor/react-meteor-data';
import * as actions from '../../actions';
import { Notes } from '../../../imports/collections/notes';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

class NoteDashboad extends Component {
  componentWillUnmount() {
    this.props.searchNote('');
  }

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

NoteDashboad = createContainer((props) => {
  const notesHandle = Meteor.subscribe('notes');
  const loading = !notesHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = Notes
    .find(
    {
      $or: [
        { title: { $regex: props.searchText } },
        { content: { $regex: props.searchText } },
      ]
    },
    { sort: { updatedAt: -1 } }
    )
    .fetch();
  const notesCount = notes.length;
  return { notes, loading, noteExists, notesCount };
}, NoteDashboad);

NoteDashboad = connect(({ isFullScreen, searchText }) => ({ isFullScreen, searchText }), actions)(NoteDashboad);

export default NoteDashboad;
