import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleToolBar } from '../../../actions';
import { createContainer } from 'meteor/react-meteor-data';
import Modal from 'react-modal';
// collections
import { Notes } from '../../../../imports/collections/notes';

class TagSearchList extends Component {
  constructor(props) {
    super(props);

    this.state = { isModalOpen: this.props.showToolBar };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ isModalOpen: nextProps.showToolBar });
  }

  handleModalClose() {
    this.props.toggleToolBar();
  }

  render() {
    return (
      <Modal
        isOpen={this.state.isModalOpen}
        onRequestClose={this.handleModalClose.bind(this)}
        contentLabel="tool-bar"
        className="tool-bar">
        toolbar
      </Modal>
    );
  }
}

TagSearchList = createContainer(() => {
  const handle = Meteor.subscribe('notes');
  const loading = !handle.ready();
  const notes = Notes.find({}).fetch();
  const tags = notes.map(note => note.tags);
  const tagList = [].concat.apply([], tags);
  return { loading, tagList };
}, TagSearchList);

const mapDispatchToProps = dispatch => bindActionCreators({ toggleToolBar }, dispatch);

TagSearchList = connect(({ showToolBar }) => ({ showToolBar }), mapDispatchToProps)(TagSearchList);

export default TagSearchList;