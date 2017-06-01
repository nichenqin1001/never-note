import React, { Component } from 'react';
import classnames from 'classnames';
// components
import NoteHeader from './NoteHeader';
import NoteListItem from './NoteListItem';
import Loader from '../../Commen/Loader';

class NoteList extends Component {

  renderNoteList() {
    const { notes, loading, noteExists, searchText } = this.props;

    if (loading) return <Loader />;

    if (!noteExists) return <div>还没有笔记，点击添加</div>;

    return notes.map(note => <NoteListItem key={note._id} note={note} searchText={searchText} />);
  }

  render() {
    return (
      <div className={classnames("notes", { "hidden": this.props.isFullScreen })}>
        <NoteHeader notesCount={this.props.notesCount} />
        <div className="notes__list">
          {this.renderNoteList()}
        </div>
      </div>
    );
  }
}

export default NoteList;
