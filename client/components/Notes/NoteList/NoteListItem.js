import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';

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
      <NavLink className="notes__list__note" to={`${this.props.match.path}/${_id}`}>
        <div className="notes__list__note-content">
          {this.renderTitle()}
          <p>{moment(updatedAt).format('YYYY-MM-DD')}</p>
          <p>{content}</p>
        </div>
      </NavLink>
    );
  }
}

NoteListItem = connect(({ searchText }) => ({ searchText }))(NoteListItem);

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;
