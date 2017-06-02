import React from 'react';
import ReactMarkdown from 'react-markdown';

const NoteDetail = ({ note }) => {
  return (
    <div className="editor__main">
      <div className="editor__main__title">{note.title}</div>
      <ReactMarkdown className="markdown-body" source={note.content} />
    </div>
  );
};

export default NoteDetail;
