import {
  createDeltaAction,
  createActionCreator,
  createSignalAction,
} from '../../../utility/redux-utils/actions';

export const CATEGORY_LIST_API_CALL = createSignalAction('CATEGORY_LIST_API_CALL');
export const GET_CATEGORY_LIST_API_CALL = createDeltaAction('GET_CATEGORY_LIST_API_CALL');
export const getCategoryListApiCall = createActionCreator(
  GET_CATEGORY_LIST_API_CALL,
);

export const CREATE_CATEGORY_API_CALL = createSignalAction('CREATE_CATEGORY_API_CALL');
export const GET_CREATE_CATEGORY_API_CALL = createDeltaAction('GET_CREATE_CATEGORY_API_CALL');
export const getCreateCategoryApiCall = createActionCreator(
  GET_CREATE_CATEGORY_API_CALL,
);

export const UPDATE_CATEGORY_API_CALL = createSignalAction('UPDATE_CATEGORY_API_CALL');
export const GET_UPDATE_CATEGORY_API_CALL = createDeltaAction('GET_UPDATE_CATEGORY_API_CALL');
export const getUpdateCategoryApiCall = createActionCreator(
  GET_UPDATE_CATEGORY_API_CALL,
);

export const DELETE_CATEGORY_API_CALL = createSignalAction('DELETE_CATEGORY_API_CALL');
export const GET_DELETE_CATEGORY_API_CALL = createDeltaAction('GET_DELETE_CATEGORY_API_CALL');
export const getDeleteCategoryApiCall = createActionCreator(
  GET_DELETE_CATEGORY_API_CALL,
);

export const CREATE_SUB_CATEGORY_API_CALL = createSignalAction('CREATE_SUB_CATEGORY_API_CALL');
export const GET_CREATE_SUB_CATEGORY_API_CALL = createDeltaAction('GET_CREATE_SUB_CATEGORY_API_CALL');
export const getCreateSubCategoryApiCall = createActionCreator(
  GET_CREATE_SUB_CATEGORY_API_CALL,
);

export const UPDATE_SUB_CATEGORY_API_CALL = createSignalAction('UPDATE_SUB_CATEGORY_API_CALL');
export const GET_UPDATE_SUB_CATEGORY_API_CALL = createDeltaAction('GET_UPDATE_SUB_CATEGORY_API_CALL');
export const getUpdateSubCategoryApiCall = createActionCreator(
  GET_UPDATE_SUB_CATEGORY_API_CALL,
);

export const DELETE_SUB_CATEGORY_API_CALL = createSignalAction('DELETE_SUB_CATEGORY_API_CALL');
export const GET_DELETE_SUB_CATEGORY_API_CALL = createDeltaAction('GET_DELETE_SUB_CATEGORY_API_CALL');
export const getDeleteSubCategoryApiCall = createActionCreator(
  GET_DELETE_SUB_CATEGORY_API_CALL,
);


export const DEFAULT_CATEGORY_LIST_API_CALL = createSignalAction('DEFAULT_CATEGORY_LIST_API_CALL');
export const GET_DEFAULT_CATEGORY_LIST_API_CALL = createDeltaAction('GET_DEFAULT_CATEGORY_LIST_API_CALL');
export const getDefaultCategoryListApiCall = createActionCreator(
  GET_DEFAULT_CATEGORY_LIST_API_CALL,
);

export const GET_HIDE_SHOW_SUB_CATEGORY = createDeltaAction('GET_HIDE_SHOW_SUB_CATEGORY');
export const getHideShowCategory = createActionCreator(
  GET_HIDE_SHOW_SUB_CATEGORY,
);

