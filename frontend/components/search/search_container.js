import { connect } from 'react-redux';

import Search from './search';
import { asArray } from '../../reducers/selectors';
import { updateFilter } from '../../actions/filter_actions';

const mapStateToProps = state => ({
  scapes: asArray(state.entities),
  category: state.ui.filters.category
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);