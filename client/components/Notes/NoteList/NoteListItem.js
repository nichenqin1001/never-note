import React, { Component } from 'react';

class NoteListItem extends Component {
  render() {
    const { note } = this.props;
    console.log(note);
    return (
      <div>
        note
      </div>
    );
  }
}

export default NoteListItem;