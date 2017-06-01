import React, { Component } from 'react';
import classnames from 'classnames';
// components
import Loader from '../../Commen/Loader';

class NoteEditorMain extends Component {
  onTitleChange() {
    if (!this.props.isEditMode) return;
  }

  render() {
    const { note, isEditMode } = this.props;

    if (!note) return <Loader />;

    return (
      <div className="editor__main">
        <input
          className={classnames("editor__main__header", { "edit": isEditMode })}
          value={note.title}
          onChange={this.onTitleChange.bind(this)} />
      </div>
    );
  }
}

export default NoteEditorMain;