import { RECEIVE_SCAPES, RECEIVE_SCAPE, RECEIVE_REVIEW } from '../actions/scape_actions';

const scapesReducer = (state = {}, action) => {
  Object.freeze(state)
  switch(action.type) {
    case RECEIVE_SCAPES:
      return action.scapes;
    case RECEIVE_SCAPE:
      const newScape = { [action.scape.id]: action.scape }
      return Object.assign({}, state, newScape);
    // case RECEIVE_REVIEW:
    //   const { review, average_rating } = action;
    //   const newState = Object.assign({}, state);
    //   newState[review.bench_id].reviewIds.push(review.id);
    //   newState[review.bench_id].average_rating = average_rating;
    //   return newState;
    default:
      return state;
  }
};

export default scapesReducer;