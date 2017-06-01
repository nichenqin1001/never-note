import { combineReducers } from 'redux';
import isFullScreen from './fullscreen';
import isEditMode from './editmode';
import searchText from './searchtext';

export default combineReducers({
  isFullScreen, isEditMode, searchText
});
