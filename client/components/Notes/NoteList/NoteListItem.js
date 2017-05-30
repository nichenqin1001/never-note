import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class NoteListItem extends Component {
  render() {
    const { title, content, updatedAt, _id } = this.props.note;
    return (
      <div className="notes__list__note">
        <Link to={`${this.props.match.path}/${_id}`}>
          <div>{title || '还没有标题'}</div>
          <div>{updatedAt}</div>
          <div>{content || '还没有内容'}</div>
        </Link>
      </div>
    );
  }
}

NoteListItem = withRouter(NoteListItem);

export default NoteListItem;