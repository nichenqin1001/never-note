import React, { Component } from 'react';
import TagList from '../Tags/TagList';

class NoteViewerInfoBar extends Component {
  render() {
    return (
      <div className="bar">
        <TagList note={this.props.note} />
      </div>
    );
  }
}

export default NoteViewerInfoBar;