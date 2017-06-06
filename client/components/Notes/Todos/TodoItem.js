import React from 'react';

const TodoItem = ({ todoItem }) => {
  const rawHTML = todoItem.substring(4, 7);
  console.log(rawHTML);

  return (
    <div dangerouslySetInnerHTML={{ __html: todoItem }} />
  );
};

export default TodoItem;
