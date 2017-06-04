import { TOGGLE_TOOLBAR } from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case TOGGLE_TOOLBAR:
      return !state;
    default:
      return state;
  }
};
