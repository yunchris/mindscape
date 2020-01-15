export const selectScape = ({ scapes }, scapeId) => {
  return scapes[scapeId] || { reviewIds: [] };
};

export const selectReviewsForScapes = ({ scapes, reviews }, scape) => {
  return scape.reviewIds.map(reviewId => reviews[reviewId]);
};

export const asArray = ({ scapes }) => (
  Object.keys(scapes).map(key => scapes[key])
);