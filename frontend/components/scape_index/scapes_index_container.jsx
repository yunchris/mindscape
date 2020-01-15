import { connect } from 'react-redux';
import { fetchScapes } from '../../actions/scape_actions';
import ScapesIndex from './scapes_index';

const mapStateToProps = state => {
  return {
    scapes: Object.values(state.entities.scapes)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchScapes: () => dispatch(fetchScapes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScapesIndex);
