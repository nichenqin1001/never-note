import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../../../../imports/collections/notes';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import classnames from 'classnames';
// components
import NoteViewerHeader from './NoteViewerHeader';
import NoteViewerInfoBar from './NoteViewerInfoBar';
import NoteViewerMain from './NoteViewerMain';

class NoteViewer extends Component {
  render() {
    const { note, isFullScreen, isEditMode } = this.props;
    return (
      <div className={classnames("editor", { "full-screen": isFullScreen })}>
        <NoteViewerHeader {...this.props} />
        <NoteViewerInfoBar note={note} />
        <NoteViewerMain isEditMode={isEditMode} note={note} />
      </div>
    );
  }
}

NoteViewer = createContainer((props) => {
  const { _id } = props.match.params;
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id }) || Notes.findOne({});
  const noteExists = !loading && !!note;
  return { loading, noteExists, note };
}, NoteViewer);

NoteViewer = connect(({ isFullScreen, isEditMode }) => ({ isFullScreen, isEditMode }), actions)(NoteViewer);

export default NoteViewer;
