import React from 'react';

const TodoItem = ({ todoItem }) => {
  const checked = todoItem.substring(4, 7) === '[x]';
  const rawHTML = todoItem.replace('<li>[ ]', `<li><input type="checkbox" disabled checked=${checked}  />`);
  return (
    <div className="todo__list-item" dangerouslySetInnerHTML={{ __html: rawHTML }} />
  );
};

export default TodoItem;
