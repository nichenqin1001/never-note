import { combineReducers } from 'redux';
import isFullScreen from './fullscreen';
import isEditMode from './editmode';
import searchText from './searchtext';
import showToolBar from './toolbar';

export default combineReducers({
  isFullScreen, isEditMode, searchText, showToolBar
});
