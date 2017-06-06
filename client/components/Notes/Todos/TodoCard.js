import React from 'react';
import TodoItem from './TodoItem';

const TodoCard = ({ todo }) => {
  return (
    <div className="todo">
      <h3 className="todo__title">
        {todo.title}
      </h3>
      <ul className="todo__list">
        {todo.todos.map((todoItem, index) => <TodoItem key={index} todoItem={todoItem} />)}
      </ul>
    </div>
  );
};

export default TodoCard;
