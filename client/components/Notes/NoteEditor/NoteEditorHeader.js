import React, { Component } from 'react';

class NoteEditorHeader extends Component {
  onFullScreen() {

  }

  render() {
    return (
      <div className="editor__header">
        <div className="editor__header-left">
          <i className="fa fa-edit"></i>
          <i className="fa fa-info-circle"></i>
          <i className="fa fa-trash"></i>
        </div>
        <div className="editor__header-right ml-auto">
          <i onClick={this.onFullScreen.bind(this)} className="fa fa-arrows-alt"></i>
        </div>
      </div>
    );
  }
};

export default NoteEditorHeader;