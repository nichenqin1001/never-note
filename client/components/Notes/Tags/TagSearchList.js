import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
// collections
import { Notes } from '../../../../imports/collections/notes';

class TagSearchList extends Component {
  render() {
    return (
      <div>
        TagSearchList
      </div>
    );
  }
}

TagSearchList = createContainer(() => {
  const handle = Meteor.subscribe('notes');
  const loading = !handle.ready();
  const notes = Notes.find({}).fetch();
  const tags = notes.map(note => note.tags);
  const tagList = [].concat.apply([], tags);
  return { loading, tagList };
}, TagSearchList);

export default TagSearchList;