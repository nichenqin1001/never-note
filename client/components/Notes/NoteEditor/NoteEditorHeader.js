import React from 'react';

const NoteEditorHeader = () => {
  return (
    <div className="editor__header">
      <div className="editor__header-left">
        <i className="fa fa-info-circle"></i>
        <i className="fa fa-trash"></i>
      </div>
      <div className="editor__header-right ml-auto">
        <i className="fa fa-arrows-alt"></i>
      </div>
    </div>
  );
};

export default NoteEditorHeader;