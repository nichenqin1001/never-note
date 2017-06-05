import React, { Component } from 'react';
import hljs from 'highlight.js';
import marked from 'marked';
import TagList from '../Tags/TagList';

marked.setOptions({ highlight: code => hljs.highlightAuto(code).value });

class NoteDetail extends Component {
  render() {
    const { note } = this.props;
    const rawHTML = marked(note.content);
    return (
      <div className="editor__main">
        <div className="editor__main__title">{note.title}</div>
        <div className="bar"><TagList note={note} /></div>
        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: rawHTML }} />
      </div>
    );
  }
};

export default NoteDetail;
