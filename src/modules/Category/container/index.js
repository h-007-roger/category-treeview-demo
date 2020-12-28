import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import * as categoryActions from '../actions/actions';
import * as appAction from '../../App/actions/actions';
import * as categoryAPIData from '../reducers/selectors';

export const mapStateToProps = createStructuredSelector({
  arrCategoryList: categoryAPIData.getCategoryListSelector()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      showToast: appAction.showToast,
      getCategoryListApiCall: categoryActions.getCategoryListApiCall,
      createCategoryApiCall: categoryActions.getCreateCategoryApiCall,
      editCategoryApiCall: categoryActions.getUpdateCategoryApiCall,
      deleteCategoryApiCall: categoryActions.getDeleteCategoryApiCall,
      createSubCategoryApiCall: categoryActions.getCreateSubCategoryApiCall,
      updateSubCategoryApiCall: categoryActions.getUpdateSubCategoryApiCall,
      deleteSubCategoryApiCall: categoryActions.getDeleteSubCategoryApiCall,
      defaulltEntryApiCall: categoryActions.getDefaultCategoryListApiCall,
      getHideShowCategory: categoryActions.getHideShowCategory,
    },
    dispatch,
  );
}
const container = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
);

export default container;
