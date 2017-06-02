import React, { Component } from 'react';
import { Prompt } from 'react-router-dom';

class NoteEditor extends Component {
  onChangeTitle(e) {
    const title = e.target.value;
    Meteor.call('notes.update', this.props.note, { title });
  }
  onChangeContent(e) {
    const content = e.target.value;
    Meteor.call('notes.update', this.props.note, { content });
  }

  render() {
    const { note, isEditMode } = this.props;
    return (
      <div className="editor__main">
        <Prompt when={isEditMode} message="re?" />
        <input
          className="editor__main__title edit"
          onChange={this.onChangeTitle.bind(this)}
          defaultValue={note.title} />
        <textarea
          className="editor__main__content edit"
          defaultValue={note.content}
          onChange={this.onChangeContent.bind(this)}>
        </textarea>
      </div>
    );
  }
}

export default NoteEditor;
