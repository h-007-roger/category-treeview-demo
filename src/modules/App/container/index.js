import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import { createStructuredSelector } from 'reselect';
import { toastSelector } from '../reducers/selectors';


const mapStateToProps = createStructuredSelector({
  systemData: toastSelector(),
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
    },
    dispatch,
  );
}

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
    null,
    {
      pure: false,
    },
  ),
);
