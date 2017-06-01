import { TOGGOLE_FULLSCREEN, TOGGOLE_EDITMODE, SEARCH_NOTE } from './types';

export function toggleFullScreen() {
  return {
    type: TOGGOLE_FULLSCREEN
  };
}

export function toggleEditMode() {
  return {
    type: TOGGOLE_EDITMODE
  };
}

export function searchNote(searchText) {
  return {
    type: SEARCH_NOTE,
    payload: searchText
  };
}
