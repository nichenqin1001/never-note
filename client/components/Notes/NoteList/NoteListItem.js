import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';

class NoteListItem extends Component {
  render() {
    const { title, content, updatedAt, _id } = this.props.note;
    return (
      <div className="notes__list__note">
        <Link className="notes__list__note-content" to={`${this.props.match.path}/${_id}`}>
          <h4 className="notes__list__note-header">{title || '还没有标题'}</h4>
          <div className="notes__list__note-update">{moment(updatedAt).format('YYYY-MM-DD')}</div>
          <p className="notes__list__note-para">{content || '还没有内容'}</p>
        </Link>
      </div>
    );
  }
}

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;