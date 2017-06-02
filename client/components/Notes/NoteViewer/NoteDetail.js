import React from 'react';

const NoteDetail = ({note}) => {
  return (
      <div className="editor__main">
        <div className="editor__main__title">{note.title}</div>
        <div className="editor__main__content">{note.content}</div>
      </div>
  );
};

export default NoteDetail;
