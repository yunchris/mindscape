import { connect } from 'react-redux';

import Search from './search';
import { asArray } from '../../reducers/selectors';
import { updateBounds } from '../../actions/filter_actions';
import { fetchScapes } from '../../actions/scape_actions'

const mapStateToProps = state => {
  return {
  scapes: asArray(state.entities),
  category: state.ui.filters.category
  }
};

const mapDispatchToProps = dispatch => ({
  fetchScapes: () => dispatch(fetchScapes()),
  updateBounds: (bounds) => dispatch(updateBounds(bounds))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);