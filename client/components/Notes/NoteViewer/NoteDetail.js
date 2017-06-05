import React, { Component } from 'react';
import hljs from 'highlight.js';
import TagList from '../Tags/TagList';
import MarkdownIt from 'markdown-it';

class NoteDetail extends Component {
  constructor(props) {
    super(props);

    this.state = { markdown: null };
  }

  componentDidMount() {
    const md = new MarkdownIt({
      highlight: (str, lang) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) { }
        }
        return ''; // use external default escaping 
      }
    });
    const rawHTML = md.render(this.props.note.content);
    const markdown = <div className="markdown-body" dangerouslySetInnerHTML={{ __html: rawHTML }} />;
    this.setState({ markdown });
  }

  render() {
    const { note } = this.props;
    return (
      <div className="editor__main">
        <div className="editor__main__title">{note.title}</div>
        <div className="bar"><TagList note={note} /></div>
        {this.state.markdown}
      </div>
    );
  }
};

export default NoteDetail;
