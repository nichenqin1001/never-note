import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { searchNote } from '../../actions';
// components
import Sidebar from './NoteSidebar';
import NoteList from './NoteList/NoteList';
import NoteEditor from './NoteEditor/NoteEditor';

class NoteDashboad extends Component {
  componentWillUnmount() {
    this.props.searchNote('');
  }

  render() {
    const { match } = this.props;
    return (
      <div className="dashboard">
        <Sidebar />
        <NoteList />
        <Route exact path={`${match.path}`} component={NoteEditor} />
        <Route path={`${match.path}/:_id`} component={NoteEditor} />
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({ searchNote }, dispatch);

NoteDashboad = connect(null, mapDispatchToProps)(NoteDashboad);

export default NoteDashboad;
