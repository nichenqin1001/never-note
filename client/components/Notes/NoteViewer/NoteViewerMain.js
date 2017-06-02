import React, { Component } from 'react';
// components
import Loader from '../../Commen/Loader';
import NoteDetail from './NoteDetail';
import NoteEditor from './NoteEditor';

class NoteViewerMain extends Component {
  render() {
    const { note, isEditMode } = this.props;
    if (!note) return <Loader />;

    return isEditMode
      ? <NoteEditor note={note} />
      : <NoteDetail isEditMode={isEditMode} note={note} />;
  }
}

export default NoteViewerMain;
