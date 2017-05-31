import React, { Component } from 'react';
import Loader from '../../Commen/Loader';

class NoteEditorMain extends Component {
  render() {

    const { note } = this.props;

    if (!note) return <Loader />;

    return (
      <div className="editor__main">
        <input className="editor__main__header" value={note.title} />
      </div>
    );
  }
}

export default NoteEditorMain;