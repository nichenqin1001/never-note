import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../../../../imports/collections/notes';
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import classnames from 'classnames';
// components
import NoteEditorHeader from './NoteEditorHeader';
import NoteEditorMain from './NoteEditorMain';

class NoteEditor extends Component {
  render() {
    const { note, isFullScreen, isEditMode } = this.props;
    return (
      <div className={classnames("editor", { "full-screen": isFullScreen })}>
        <NoteEditorHeader {...this.props} />
        <NoteEditorMain isEditMode={isEditMode} note={note} />
      </div>
    );
  }
}

NoteEditor = createContainer((props) => {
  const { _id } = props.match.params;
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id }) || Notes.findOne({});
  const noteExists = !loading && !!note;
  return { loading, noteExists, note };
}, NoteEditor);

NoteEditor = connect(({ isFullScreen, isEditMode }) => ({ isFullScreen, isEditMode }), actions)(NoteEditor);

export default NoteEditor;
