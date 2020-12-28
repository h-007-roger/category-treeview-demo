import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose } from 'recompose';
import PropTypes from 'prop-types';
import { notification } from 'antd';
import './ToastComponentStyle.scss';

import * as actions from '../../../modules/App/actions/actions';

function mapStateToProps(state) {
  return state.toastReducer;
}

const openNotificationWithIcon = (type, title, description) => {
  notification[type]({
    message: title,
    description,
  });
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: actions.closeDialog,
      showToast: actions.showToast,
    },
    dispatch,
  );
}

class AppContainer extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.isToastVisible && this.props.isToastVisible) {
      this.renderToastMessage();
    }
  }

  renderToastMessage() {
    const { toastData, closeDialog } = this.props;
    const {
      type,
      title,
      description,
    } = toastData;

    openNotificationWithIcon(type, title, description);
    closeDialog();
  }

  render() {
    return (null);
  }
}

AppContainer.propTypes = {
  isToastVisible: PropTypes.any,
  toastData: PropTypes.any,
  closeDialog: PropTypes.func,
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AppContainer);
