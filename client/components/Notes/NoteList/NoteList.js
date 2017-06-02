import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../../imports/collections/notes';
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

NoteList = createContainer(props => {
  const notesHandle = Meteor.subscribe('notes');
  const loading = !notesHandle.ready();
  const note = Notes.findOne();
  const noteExists = !loading && !!note;
  const notes = Notes
    .find(
    {
      $or: [
        { title: { $regex: props.searchText } },
        { content: { $regex: props.searchText } },
      ]
    },
    { sort: { updatedAt: -1 } }
    )
    .fetch();
  const notesCount = notes.length;
  return { notes, loading, noteExists, notesCount };
}, NoteList);

NoteList = connect(({ isFullScreen, searchText }) => ({ isFullScreen, searchText }))(NoteList);

// 为子组件NavLink组件提供active class所运行函数的参数
NoteList = withRouter(NoteList);

export default NoteList;
