import React from 'react';

const TodoItem = ({ todoItem }) => {
  const checkeBoxStr = todoItem.substring(4, 7);
  let rawHTML = '';
  if (checkeBoxStr === '[ ]') {
    rawHTML = todoItem.replace('<li>[ ]', `<li><input type="checkbox" disabled />`);
  } else {
    rawHTML = todoItem.replace('<li>[x]', `<li><input type="checkbox" disabled checked />`);
  }
  return (
    <div className="todo__list-item" dangerouslySetInnerHTML={{ __html: rawHTML }} />
  );
};

export default TodoItem;
