import React from 'react';
import Loader from '../../Commen/Loader';

const TagList = ({ note }) => {
  return (
    note
      ? <div className="bar__list">
        标签：
        {note.tags.map(tag => <span key={tag} className="label label__tag">{tag}</span>)}
      </div>
      : <Loader />

  );
};

export default TagList;