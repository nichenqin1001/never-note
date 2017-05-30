import React, { Component } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
// collections
import { Notes } from '../../../../imports/collections/notes';
// components
import NoteHeader from './NoteHeader';
import NoteListItem from './NoteListItem';
import Loader from '../../Commen/Loader';

class NoteList extends Component {
  renderNoteList() {
    const { notes, loading, noteExists } = this.props;

    if (loading) return <Loader />;

    if (!noteExists) return <div>还没有笔记，点击添加</div>;

    return notes.map(note => <NoteListItem key={note._id} note={note} />);
  }

  render() {
    return (
      <div className={classnames("notes", { "hidden": this.props.isFullScreen })}>
        <NoteHeader />
        <div className="notes__list">
          {this.renderNoteList()}
        </div>
      </div>
    );
  }
}

NoteList = createContainer(() => {
  const notesHandle = Meteor.subscribe('notes');
  const loading = !notesHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = Notes.find({}).fetch();
  return { notes, loading, noteExists };
}, NoteList);

export default NoteList;