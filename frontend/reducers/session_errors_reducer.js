import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

import { CLOSE_MODAL } from '../actions/modal_actions';

export default (state = [], action) => {
  Object.freeze(state);
  let nextState = [];
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      const lina = action.errors ? action.errors : []
      return lina;
    case RECEIVE_CURRENT_USER:
    case CLEAR_ERRORS:
    case CLOSE_MODAL:
      return [];

    default:
      return state;
  }
};