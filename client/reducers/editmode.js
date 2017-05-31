import { TOGGOLE_EDITMODE } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGOLE_EDITMODE:
      return !state;

    default:
      return state;
  }
};