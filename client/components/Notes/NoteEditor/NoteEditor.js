import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../../../../imports/collections/notes';
// components
import NoteEditorHeader from './NoteEditorHeader';
import NoteEditorMain from './NoteEditorMain';

class NoteEditor extends Component {
  render() {
    const { note } = this.props;
    return (
      <div className="editor">
        <NoteEditorHeader />
        <NoteEditorMain note={note} />
      </div>
    );
  }
}

NoteEditor = createContainer((props) => {
  const { _id } = props.match.params;
  const noteHandle = Meteor.subscribe('notes');
  const loading = !noteHandle.ready();
  const note = Notes.findOne({ _id });
  const noteExists = !loading && !!note;
  return { loading, noteExists, note };
}, NoteEditor);

export default NoteEditor;