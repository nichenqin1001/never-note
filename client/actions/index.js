import { TOGGLE_FULLSCREEN, TOGGLE_EDITMODE, SEARCH_NOTE, QUIT_EDITMODE } from './types';

export function toggleFullScreen() {
  return {
    type: TOGGLE_FULLSCREEN
  };
}

export function toggleEditMode() {
  return {
    type: TOGGLE_EDITMODE
  };
}

export function quitEditMode() {
  return {
    type: QUIT_EDITMODE
  };
}

export function searchNote(searchText) {
  return {
    type: SEARCH_NOTE,
    payload: searchText
  };
}
