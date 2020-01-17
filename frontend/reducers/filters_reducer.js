import { UPDATE_FILTER, SEND_CATEGORY, UPDATE_CATEGORY, UPDATE_BOUNDS} from '../actions/filter_actions';

const defaultFilters = Object.freeze({
  bounds: {}, 
  category: "all"
});

const filtersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  if (action.type === UPDATE_FILTER) {
    const newFilter = {
      category: action.filter, 
      bounds: action.value 
    };
    return Object.assign({}, state, newFilter);
  } else if (action.type === UPDATE_CATEGORY) {
    return Object.assign({}, state, {category: action.genre});
  } else if (action.type === UPDATE_BOUNDS) {
    return Object.assign({}, state, { bounds: action.bounds });
  } else {
    return state;
  }
};

export default filtersReducer;