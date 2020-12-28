import {
  createDeltaAction,
  createActionCreator,
} from '../../../utility/redux-utils/actions';

export const CLEAR_ALL_DATA = createDeltaAction('CLEAR_ALL_DATA');

export const SHOW_TOAST = createDeltaAction('SHOW_TOAST');
export const showToast = createActionCreator(SHOW_TOAST);

export const CLOSE_DIALOG = createDeltaAction('CLOSE_DIALOG');
export const closeDialog = createActionCreator(CLOSE_DIALOG);

export const SHOW_LOADER = createDeltaAction('SHOW_LOADER');
export const showLoader = createActionCreator(SHOW_LOADER);

export const HIDE_LOADER = createDeltaAction('HIDE_LOADER');
export const hideLoader = createActionCreator(HIDE_LOADER);
