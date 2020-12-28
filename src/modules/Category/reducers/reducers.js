import { createReducer } from '../../../utility/redux-utils/simpleDataReducer';
import * as actions from '../actions/actions';

const categoryReducer = createReducer(actions.CATEGORY_LIST_API_CALL);
const createCategoryReducer = createReducer(actions.CREATE_CATEGORY_API_CALL);
const updateCategoryReducer = createReducer(actions.UPDATE_CATEGORY_API_CALL);
const deleteCategoryReducer = createReducer(actions.DELETE_CATEGORY_API_CALL);
const createSubCategoryReducer = createReducer(actions.CREATE_SUB_CATEGORY_API_CALL);
const updateSubcategoryReducer = createReducer(actions.UPDATE_SUB_CATEGORY_API_CALL);
const deleteSubcategoryReducer = createReducer(actions.DELETE_SUB_CATEGORY_API_CALL);
const loadDefaultCategoryReducer = createReducer(actions.DEFAULT_CATEGORY_LIST_API_CALL);

export {
  categoryReducer,
  createCategoryReducer,
  updateCategoryReducer,
  deleteCategoryReducer,
  createSubCategoryReducer,
  updateSubcategoryReducer,
  deleteSubcategoryReducer,
  loadDefaultCategoryReducer,
};
