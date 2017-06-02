import React, { Component } from 'react';

class NoteEditor extends Component {
  onTitleChange(){

  }
  
  render() {
  const { note } = this.props;
    return (
      <div className="editor__main">
        <input
          className="editor__main__title edit"
          value={note.title}
          onChange={this.onTitleChange.bind(this)} />
        <textarea
          className="editor__main__content edit"
          value={note.content}
          onChange={this.onContentChange.bind(this)}
          ></textarea>
      </div>
    );
  }
}

export default NoteEditor;
