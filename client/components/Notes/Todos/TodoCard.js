import React from 'react';
import TodoItem from './TodoItem';

const TodoCard = ({ todo }) => {
  return (
    <div className="todo">
      <h3 className="todo__title">
        {todo.title}
      </h3>
      {todo.todos.map((todoItem, index) => <TodoItem key={index} todoItem={todoItem} />)}
    </div>
  );
};

export default TodoCard;
