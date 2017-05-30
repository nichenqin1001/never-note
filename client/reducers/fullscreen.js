import { TOGGOLE_FULLSCREEN } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGOLE_FULLSCREEN:
      return !state;

    default:
      return state;
  }
};
