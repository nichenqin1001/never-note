import React, { Component } from 'react';

import NoteHeader from './NoteHeader';
import NoteListItem from './NoteListItem';

class NoteList extends Component {
  render() {
    return (
      <div className="notes">
        <NoteHeader />
        <div className="notes__list">

        </div>
      </div>
    );
  }
}

export default NoteList;