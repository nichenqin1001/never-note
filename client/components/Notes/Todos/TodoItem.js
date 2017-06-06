import React from 'react';

const TodoItem = ({ todoItem }) => {
  return (
    <div className="todo__list-item" dangerouslySetInnerHTML={{ __html: todoItem }} />
  );
};

export default TodoItem;
