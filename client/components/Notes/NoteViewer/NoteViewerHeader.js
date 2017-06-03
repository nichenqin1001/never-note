import React, { Component } from 'react';
import classnames from 'classnames';
import Modal from 'react-modal';
import NoteInfo from '../NoteInfo';

class NoteEditorHeader extends Component {
  constructor(props) {
    super(props);

    this.state = { modalOpen: false };

  }

  toggleEditMode() {
    this.props.toggleEditMode();
  }

  onFullScreen() {
    this.props.toggleFullScreen();
  }

  removeNote() {
    Meteor.call('notes.remove', this.props.note);
  }

  handleModal(modalOpen) {
    this.setState({ modalOpen });
  }

  render() {
    const { isFullScreen, note, isEditMode } = this.props;
    return (
      <div className="editor__header">
        <div className="editor__header-left">
          <i
            onClick={this.toggleEditMode.bind(this)}
            className={classnames("fa fa-edit", { "edit": isEditMode })}></i>
          <i
            onClick={() => this.handleModal(true)}
            className="fa fa-info-circle"></i>
          <i
            onClick={this.removeNote.bind(this)}
            className="fa fa-trash"></i>
          <i
            className="fa fa-share">
          </i>
        </div>
        <div className="editor__header-right ml-auto">
          <i
            onClick={this.onFullScreen.bind(this)}
            className={classnames(
              "fa",
              { "fa-arrows-alt": !isFullScreen, "fa-compress": isFullScreen }
            )}></i>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          contentLabel="noteInfo"
          className="modal animated fadeIn"
        >
          <i
            onClick={() => this.handleModal(false)}
            className="fa fa-window-close-o fa-2x">
          </i>
          <NoteInfo note={note} />
        </Modal>
      </div >
    );
  }
};

export default NoteEditorHeader;
