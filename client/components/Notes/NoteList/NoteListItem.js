import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import moment from 'moment';

class NoteListItem extends Component {
  render() {
    const { title, content, updatedAt, _id } = this.props.note;
    return (
      <NavLink className="notes__list__note" to={`${this.props.match.path}/${_id}`}>
        <div className="notes__list__note-content">
          <h4>{title}</h4>
          <p>{moment(updatedAt).format('YYYY-MM-DD')}</p>
          <p>{content}</p>
        </div>
      </NavLink>
    );
  }
}

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;
