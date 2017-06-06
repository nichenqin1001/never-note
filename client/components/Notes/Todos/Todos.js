import React, { Component } from 'react';
import marked from 'marked';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../../../../imports/collections/notes';

class Todos extends Component {
  render() {
    return (
      <div>
        todo
      </div>
    );
  }
}

Todos = createContainer(() => {
  const handle = Meteor.subscribe('notes');
  const laoding = !handle.ready();
  const noteExists = !!Notes.findOne({});
  const notes = Notes.find({}).fetch();
  const todos = notes.map(note => {
    const { _id, title } = note;
    const todos = marked(note.content).split('\n').filter(
      content => content.substring(4, 7) === ('[ ]' || '[x]')
    );
    return { _id, title, todos };
  }).filter(todo => todo.todos.length > 0);
  return { laoding, noteExists, todos };
}, Todos);

export default Todos;
