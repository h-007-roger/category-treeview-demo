import { all } from 'redux-saga/effects';
import categoryWatcherSaga from './modules/Category/sagas/sagas';

export default function* rootSaga() {
  yield all([
    categoryWatcherSaga(),
  ]);
}
