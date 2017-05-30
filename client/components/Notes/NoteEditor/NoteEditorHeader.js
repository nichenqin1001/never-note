import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../actions';

class NoteEditorHeader extends Component {
  onFullScreen() {
    this.props.toggleFullScreen();
  }

  render() {
    return (
      <div className="editor__header">
        <div className="editor__header-left">
          <i className="fa fa-edit"></i>
          <i className="fa fa-info-circle"></i>
          <i className="fa fa-trash"></i>
        </div>
        <div className="editor__header-right ml-auto">
          <i onClick={this.onFullScreen.bind(this)} className="fa fa-arrows-alt"></i>
        </div>
      </div>
    );
  }
};

NoteEditorHeader = connect(null, action)(NoteEditorHeader);

export default NoteEditorHeader;