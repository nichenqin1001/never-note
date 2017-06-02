import { TOGGLE_FULLSCREEN } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_FULLSCREEN:
      return !state;

    default:
      return state;
  }
};
