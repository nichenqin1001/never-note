import { combineReducers } from 'redux';
import isFullScreen from './fullscreen';
import isEditMode from './editmode';

export default combineReducers({
  isFullScreen, isEditMode
});