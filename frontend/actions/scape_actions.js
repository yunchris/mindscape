import * as APIUtil from '../util/scape_api_util';

export const RECEIVE_SCAPES = 'RECEIVE_SCAPES';
export const RECEIVE_SCAPE = 'RECEIVE_SCAPE';
// export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

export const receiveScapes = scapes => ({
  type: RECEIVE_SCAPES,
  scapes
});

export const receiveScape = (scape) => ({
  type: RECEIVE_SCAPE,
  scape
});

// export const receiveReview = ({ review, }) = ({
//   type: RECEIVE_REVIEW,
//   review,
//   average_rating,
//   author,
// });

// export const createReview = review => dispatch => (
//   APIUtil.createReview(review).then(review => (
//     dispatch(receiveReview(review))
//   ))
// );

export const fetchScapes = (filter) => dispatch => (
  APIUtil.fetchScapes(filter).then(scapes => (
    dispatch(receiveScapes(scapes))
  ))
);

export const fetchScape = scapeId => dispatch => (
  APIUtil.fetchScape(scapeId).then(scape => (
    dispatch(receiveScape(scape))
  ))
);