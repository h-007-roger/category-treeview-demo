import { createSelector } from 'reselect';
import {
  TOAST_REDUCER_NAME,
} from './consts';

export const userLoginStatusSelector = (state) => createSelector(
  state,
  () => true,
);

const getState = (state) => state;
export const isFetchingSelector = createSelector([getState], (state) => {
  let isFetching = false;
  const fetchingKeys = [];
  Object.keys(state).forEach((key) => {
    if (state[key].isFetching) {
      isFetching = true;
      fetchingKeys.push(key);
    }
  });
  return {
    fetching: isFetching,
    fetchingKeys,
  };
});

// export const toastSelector = createSelector([getState], state => ({
//   toastData: state[TOAST_REDUCER_NAME],
// }));


export const getToastReducer = (state) => state[TOAST_REDUCER_NAME];
export const toastSelector = () => createSelector(getToastReducer,
  (toastDataReducer) => toastDataReducer);
