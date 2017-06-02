import { TOGGLE_EDITMODE, QUIT_EDITMODE } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_EDITMODE:
      return !state;
    case QUIT_EDITMODE:
      return false;

    default:
      return state;
  }
};
