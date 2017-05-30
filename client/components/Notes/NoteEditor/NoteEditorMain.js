import React, { Component } from 'react';
import Loader from '../../Commen/Loader';

class NoteEditorMain extends Component {
  render() {

    const { note } = this.props;

    if (!note) return <Loader />;

    return (
      <div className="editor__main">
        <h1 className="editor__main__header">{note.title}</h1>
      </div>
    );
  }
}

export default NoteEditorMain;