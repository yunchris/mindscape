import { connect } from 'react-redux';
import { fetchScapes } from '../../actions/scape_actions';
import { updateCategory } from '../../actions/filter_actions'
import ScapesIndex from './scapes_index';

const mapStateToProps = (state, ownProps) => {
  return {
    scapes: Object.values(state.entities.scapes),
    bounds: state.ui.filters.bounds, 
    category: state.ui.filters.category,
    token: ownProps.token
  }
};

const mapDispatchToProps = dispatch => ({
  fetchScapes: () => dispatch(fetchScapes()), 
  updateCategory: (filter, value) => dispatch(updateCategory(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScapesIndex);
