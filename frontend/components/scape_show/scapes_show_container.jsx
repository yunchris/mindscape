import { connect } from 'react-redux';

import { fetchScape } from '../../actions/scape_actions';
import ScapeShow from './scapes_show';

const mapStateToProps = (state, ownProps) => {
  return {
  scape: state.entities.scapes[ownProps.match.params.scapeId]
}};

const mapDispatchToProps = dispatch => {
  return ({
    requestScape: scapeId => dispatch(fetchScape(scapeId))
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ScapeShow)