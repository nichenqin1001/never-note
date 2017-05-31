import { TOGGOLE_FULLSCREEN, TOGGOLE_EDITMODE } from './types';

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