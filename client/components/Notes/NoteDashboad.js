import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNote } from '../../actions';
import Modal from 'react-modal';
import classnames from 'classnames';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteViewer from './NoteViewer/NoteViewer';
import TagSearchList from './Tags/TagSearchList';

class NoteDashboad extends Component {
  componentWillUnmount() {
    this.props.searchNote('');
  }

  render() {
    const { match } = this.props;
    return (
      <div className="dashboard">
        <Modal
          isOpen={this.props.showToolBar}
          onAfterOpen={this.afterOpenModal.bind(this)}
          contentLabel="tool-bar"
          className="tool-bar">
          <TagSearchList ref="tag" />
        </Modal>
        <Sidebar />
        <NoteList />
        <Route exact path={`${match.path}`} component={NoteViewer} />
        <Route path={`${match.path}/:_id`} component={NoteViewer} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ searchNote }, dispatch);

NoteDashboad = connect(({ showToolBar }) => ({ showToolBar }), mapDispatchToProps)(NoteDashboad);

export default NoteDashboad;
