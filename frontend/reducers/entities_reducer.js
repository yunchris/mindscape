import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import scapesReducer from './scapes_reducer';
// import reviewsReducer from './reviews_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  scapes: scapesReducer,
  // reviews: reviewsReducer
});

export default entitiesReducer;