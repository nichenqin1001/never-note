import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
    const to = `/notes/${_id}`;

    return (
      <NavLink className="notes__list__note" to={to}>
        <div className="notes__list__note-content">
          {this.renderTitle()}
          <p>{moment(updatedAt).format('YYYY-MM-DD')}</p>
          <p>{content}</p>
        </div>
      </NavLink>
    );
  }
}

export default NoteListItem;
