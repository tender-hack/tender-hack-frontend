import { connect } from 'react-redux';

import Widgets from './component';

export const mapStateToProps = (state) => ({
  state: state,
});

export const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Widgets);
