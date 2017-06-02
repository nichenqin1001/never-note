import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { quitEditMode } from '../../../actions';

class NoteListItem extends Component {
  renderTitle() {
    let { note: { title }, searchText } = this.props;

    if (title.indexOf(searchText) !== -1 && searchText) {
      title = title.replace(searchText, `<span class="highlight">${searchText}</span>`);
    }

    return <h4 dangerouslySetInnerHTML={{
      __html: title
    }} />;
  }

  render() {
    const { content, updatedAt, _id } = this.props.note;

    return (
      <NavLink onClick={() => this.props.quitEditMode()} className="notes__list__note" to={`/notes/${_id}`}>
        <div className="notes__list__note-content">
          {this.renderTitle()}
          <p>{moment(updatedAt).format('YYYY-MM-DD')}</p>
          <p>{content}</p>
        </div>
      </NavLink>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ quitEditMode }, dispatch);

NoteListItem = connect(null, mapDispatchToProps)(NoteListItem);

export default NoteListItem;
