import React from 'react';
import Loader from '../../Commen/Loader';

const TagList = ({ note }) => {
  return (
    note
      ? <ul className="bar__list">
        标签：
        {note.tags.map(tag => <li key={tag} className="label">{tag}</li>)}
      </ul>
      : <Loader />

  );
};

export default TagList;