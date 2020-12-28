import Immutable from 'seamless-immutable';

import * as actions from '../actions/actions';

// category
import {
  categoryReducer,
  createCategoryReducer,
  updateCategoryReducer,
  deleteCategoryReducer,
  createSubCategoryReducer,
  updateSubcategoryReducer,
  deleteSubcategoryReducer,
  loadDefaultCategoryReducer,
} from '../../Category/reducers/reducers';
import {
  CATEGORY_LIST_REDUCER_NAME,
  CREATE_CATEGORY_REDUCER_NAME,
  UPDATE_CATEGORY_REDUCER_NAME,
  DELETE_CATEGORY_REDUCER_NAME,
  CREATE_SUB_CATEGORY_REDUCER_NAME,
  UPDATE_SUB_CATEGORY_REDUCER_NAME,
  DELETE_SUB_CATEGORY_REDUCER_NAME,
  LOAD_DEFAULT_CATEGORY_REDUCER_NAME,
} from '../../Category/reducers/consts';



import {
  TOAST_REDUCER_NAME,
} from './consts';


export const initialState = Immutable({
  isToastVisible: false,
  showLoader: false,
  toastData: {},
});


export function toastReducer(state = initialState, action) {
  switch (action.type) {
    case actions.SHOW_TOAST:
      return {
        ...state,
        isToastVisible: true,
        toastData: action.data,
      };
    case actions.CLOSE_DIALOG:
      return {
        ...state,
        isToastVisible: false,
        toastData: {},
      };
    case actions.SHOW_LOADER:
      return {
        ...state,
        showLoader: true,
      };
    case actions.HIDE_LOADER:
      return {
        ...state,
        showLoader: false,
      };
    case actions.CLEAR_ALL_DATA:
      return initialState;
    default:
      return state;
  }
}

const apiReducers = {
  [TOAST_REDUCER_NAME]: toastReducer,
  // category
  [CATEGORY_LIST_REDUCER_NAME]: categoryReducer,
  [CREATE_CATEGORY_REDUCER_NAME]: createCategoryReducer,
  [UPDATE_CATEGORY_REDUCER_NAME]: updateCategoryReducer,
  [DELETE_CATEGORY_REDUCER_NAME]: deleteCategoryReducer,
  [CREATE_SUB_CATEGORY_REDUCER_NAME]: createSubCategoryReducer,
  [UPDATE_SUB_CATEGORY_REDUCER_NAME]: updateSubcategoryReducer,
  [DELETE_SUB_CATEGORY_REDUCER_NAME]: deleteSubcategoryReducer,
  [LOAD_DEFAULT_CATEGORY_REDUCER_NAME]: loadDefaultCategoryReducer,
};

export default apiReducers;
