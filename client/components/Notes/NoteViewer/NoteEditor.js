import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quitEditMode } from '../../../actions';

class NoteEditor extends Component {
  constructor(props) {
    super(props);

    const { title, content, tags } = this.props.note;

    this.state = { title, content, tags };
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const tags = this.state.tags;
    Meteor.call('notes.update', this.props.note, { title, content, tags }, error => {
      if (!error) this.props.quitEditMode();
    });
  }

  onChangeTitle(e) {
    const title = e.target.value;
    this.setState({ title });
  }

  onChangeContent(e) {
    const content = e.target.value;
    this.setState({ content });
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
          {this.state.tags.map(tag => <div key={tag} className="label">{tag}</div>)}
          <input type="text" name="tag" placeholder="添加标签..." ref="tag" />
          <i className="fa fa-plus" onClick={this.handleAddTag.bind(this)}></i>
        </div>
        <textarea
          name="content"
          className="editor__main__content edit"
          defaultValue={this.state.content}
          onChange={this.onChangeContent.bind(this)}>
        </textarea>
        <button style={{ position: "absolute", right: "40px", bottom: "40px" }} type="submit">保存</button>
        <button style={{ position: "absolute", right: "80px", bottom: "40px" }} onClick={() => this.props.quitEditMode()}>取消</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ quitEditMode }, dispatch);

NoteEditor = connect(null, mapDispatchToProps)(NoteEditor);

export default NoteEditor;
