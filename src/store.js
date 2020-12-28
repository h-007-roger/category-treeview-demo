import "regenerator-runtime/runtime";
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { compose } from 'recompose';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';
import * as reducer from './reducer';
import rootSaga from './saga';

const logger = createLogger({ collapsed: true });

const composeEnhancers = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
  })
  : compose;

const persistConfig = {
  key: 'root',
  storage,
};

const configStore = (history) => {
  const sagaMiddleware = createSagaMiddleware();
  let store;
    store = createStore(
      connectRouter(history)(reducer.default),
      composeEnhancers(applyMiddleware(routerMiddleware(history), sagaMiddleware, logger)),
    );
  sagaMiddleware.run(rootSaga);

  return store
};

export default configStore;
