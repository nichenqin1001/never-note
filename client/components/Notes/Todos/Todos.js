import React, { Component } from 'react';
import marked from 'marked';
import { createContainer } from 'meteor/react-meteor-data';
import { Notes } from '../../../../imports/collections/notes';
// components
import TodoCard from './TodoCard';

class Todos extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todo-list">
        {todos.map(todo => <TodoCard key={todo._id} todo={todo} />)}
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
      content => content.substring(4, 7) === '[x]' || content.substring(4, 7) === '[ ]'
    );
    return { _id, title, todos };
  }).filter(todo => todo.todos.length > 0);
  const plainTodos = todos.reduce((plain, todo) => [...plain, ...todo.todos], []);

  return { laoding, noteExists, todos, plainTodos };
}, Todos);

export default Todos;
