import React, { Component } from 'react';
import hljs from 'highlight.js';
import ReactMarkdown from 'react-markdown';
import TagList from '../Tags/TagList';

class NoteDetail extends Component {
  componentDidMount() {
    hljs.initHighlighting();
  }

  render() {
    const { note } = this.props;
    return (
      <div className="editor__main">
        <div className="editor__main__title">{note.title}</div>
        <div className="bar"><TagList note={note} /></div>
        <ReactMarkdown className="markdown-body" source={note.content} />
      </div>
    );
  }
};

export default NoteDetail;
