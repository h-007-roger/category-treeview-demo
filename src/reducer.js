import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import appReducers from './modules/App/reducers/reducers';
import { CLEAR_ALL_DATA } from './modules/App/actions/actions';

const history = createBrowserHistory();

const createRootReducer = combineReducers({
  router: connectRouter(history),
  ...appReducers,
});

function rootReducer(state, action) {
  let newState = state;
  console.log(action);
  if (action.type === CLEAR_ALL_DATA) {
    // Passing the initial state as undefined
    newState = undefined;
  }
  return createRootReducer(newState, action);
}


export default rootReducer;
