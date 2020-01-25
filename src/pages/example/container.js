import { connect } from 'react-redux';

import Result from './component';

export const mapStateToProps = (state) => ({
  state: state,
});

export const mapDispatchToProps = (dispatch) => ({
  closePublishOfferAreaModal: () => {
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);
