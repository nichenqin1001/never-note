import { SEARCH_NOTE } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case SEARCH_NOTE:
      return action.payload;

    default:
      return state;
  }
};
