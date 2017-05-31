import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../../../actions';
import classnames from 'classnames';

class NoteEditorHeader extends Component {
  onFullScreen() {
    this.props.toggleFullScreen();
  }

  removeNote() {
    Meteor.call('notes.remove', this.props.note);
  }

  render() {
    const { isFullScreen } = this.props;
    return (
      <div className="editor__header">
        <div className="editor__header-left">
          <i className="fa fa-edit"></i>
          <i className="fa fa-info-circle"></i>
          <i
            onClick={this.removeNote.bind(this)}
            className="fa fa-trash"></i>
        </div>
        <div className="editor__header-right ml-auto">
          <i
            onClick={this.onFullScreen.bind(this)}
            className={classnames(
              "fa",
              { "fa-arrows-alt": !isFullScreen, "fa-compress": isFullScreen }
            )}></i>
        </div>
      </div>
    );
  }
};

NoteEditorHeader = connect(null, action)(NoteEditorHeader);

export default NoteEditorHeader;
