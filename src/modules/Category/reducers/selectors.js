import { createSelector } from 'reselect';
import {
  CATEGORY_LIST_REDUCER_NAME,
} from './consts';

export const getCategoryListDetail = (state) => state[CATEGORY_LIST_REDUCER_NAME];
export const getCategoryListSelector = () => {
  return createSelector(
  getCategoryListDetail,
  (getCategoryListReducer) => (getCategoryListReducer.data
    ? (getCategoryListReducer.data.data ? getCategoryListReducer.data.data : []) : []),
)
};
