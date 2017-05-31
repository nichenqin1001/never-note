import React from 'react';
import moment from 'moment';

const NoteInfo = props => {
  return (
    <div className="modal__content">
      <h1 className="modal__content-header">{props.note.title}</h1>
      <div className="modal__content-content">
        <p>概要：</p>
        <p>创建时间：{moment(props.note.createdAt).format('YYYY-MM-DD')}</p>
        <p>修改时间：{moment(props.note.updatedAt).format('YYYY-MM-DD')}</p>
      </div>
    </div>
  );
};

export default NoteInfo;
