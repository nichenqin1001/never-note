import React from 'react';
import ReactMarkdown from 'react-markdown';
import TagList from '../Tags/TagList';

const NoteDetail = ({ note }) => {
  return (
    <div className="editor__main">
      <div className="editor__main__title">{note.title}</div>
      <div className="bar"><TagList note={note} /></div>
      <ReactMarkdown className="markdown-body" source={note.content} />
    </div>
  );
};

export default NoteDetail;
