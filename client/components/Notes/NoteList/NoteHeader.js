import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNote } from '../../../actions';

class NoteHeader extends Component {
  onSearchNote(e) {
    this.props.searchNote(e.target.value);
  }

  render() {
    return (
      <div className="notes__header">
        <h2>Never Note</h2>
        <input className="form__control sm" onChange={this.onSearchNote.bind(this)} type="text" />
        <p>{this.props.notesCount} 条笔记</p>
      </div>
    );
  };
}

const mapDispatchToProps = dispatch => bindActionCreators({ searchNote }, dispatch);

NoteHeader = connect(null, mapDispatchToProps)(NoteHeader);

export default NoteHeader;
