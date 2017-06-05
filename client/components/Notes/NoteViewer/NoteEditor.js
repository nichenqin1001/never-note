import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import { quitEditMode } from '../../../actions';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    const { title, content, tags } = this.props.note;
    const error = '';

    this.state = { title, content, tags, error };
  }

  componentDidMount() {
    const mdeOptions = {
      element: this.refs.markdown,
      toolbar: [
        "bold", "italic", "heading",
        "|",
        "quote", "link", "image", "table",
        "|",
        "code", "unordered-list", "ordered-list",
        "|",
        "clean-block", "side-by-side", "fullscreen",
        "|",
        {
          name: "cancel",
          action: this.props.quitEditMode,
          className: "fa fa-ban",
          title: "Cancel",
        },
        {
          name: "cancel",
          action: this.updateNote.bind(this),
          className: "fa fa-check-circle-o",
          title: "Cancel",
        }
      ]
    };
    this.simplemde = new SimpleMDE(mdeOptions);
    this.simplemde.value(this.state.content);
  }

  updateNote() {
    const { title, tags } = this.state;
    const content = this.simplemde.value();
    Meteor.call('notes.update', this.props.note, { title, content, tags }, error => {
      if (!error) this.props.quitEditMode();
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const content = this.simplemde.value();
    const tags = this.state.tags;
    Meteor.call('notes.update', this.props.note, { title, content, tags }, error => {
      if (!error) this.props.quitEditMode();
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  handleAddTag() {
    const tag = this.refs.tag.value;
    this.setState({ tags: [...this.state.tags, tag] });
    this.refs.tag.value = '';
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="editor__main">
        <input
          name="title"
          className="editor__main__title edit"
          onChange={this.onChangeTitle.bind(this)}
          defaultValue={this.state.title} />
        <div className="bar">
          {this.state.tags.map(tag => <span key={tag} className="label">{tag}</span>)}
          <input type="text" name="tag" placeholder="添加标签..." ref="tag" />
          <i className="fa fa-plus" onClick={this.handleAddTag.bind(this)}></i>
        </div>
        <div className="editor__main__content edit">
          <textarea ref="markdown" />
        </div>
        <button style={{ position: "absolute", right: "40px", bottom: "40px" }} type="submit">保存</button>
        <button style={{ position: "absolute", right: "80px", bottom: "40px" }} onClick={() => this.props.quitEditMode()}>取消</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ quitEditMode }, dispatch);

NoteEditor = connect(null, mapDispatchToProps)(NoteEditor);

export default NoteEditor;
