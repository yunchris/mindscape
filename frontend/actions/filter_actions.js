import { fetchScapes } from './scape_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

export const changeFilter = (filter, value) => {
  return {
  type: UPDATE_FILTER,
  filter,
  value
}};

export const changeCategory = (genre) => {
  return {
    type: UPDATE_CATEGORY, 
    genre
  }
}

export const changeBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  }
}

export const updateBounds = (bounds) => (dispatch, getState) => {
  dispatch(changeBounds(bounds));
  return fetchScapes(getState().ui.filters)(dispatch);
};

export const updateCategory = (genre) => (dispatch, getState) => {
  dispatch(changeCategory(genre));
  return fetchScapes(getState().ui.filters)(dispatch);
}