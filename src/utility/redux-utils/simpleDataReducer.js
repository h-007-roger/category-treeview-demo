import Immutable from 'seamless-immutable';

const initialState = Immutable({
  isFetching: false,
  error: null,
  data: null,
  progress: null,
  finished: false,
});

export function reducer(state = initialState, action, actionSignal) {
  switch (action.type) {
    case actionSignal.REQUEST:
      return {
        ...state,
        isFetching: true,
        finished: false,
        error: null,
      };
    case actionSignal.SUCCESS:
      return {
        ...state,
        isFetching: false,
        finished: true,
        data: {
          ...state.data,
          ...action.data,
        },
        error: null,
      };

    case actionSignal.PROGRESS:
      return {
        ...state,
        progress: {
          ...action.data,
        },
      };
    case actionSignal.FAILURE:
      return {
        ...state,
        isFetching: false,
        finished: true,
        data: null,
        error: {
          ...state.error,
          ...action.data,
        },
      };
    case actionSignal.CANCEL:
    case actionSignal.CLEAR:
      return initialState;
    default:
      return state;
  }
}

export const createReducer = (actionSignal) => (state, action) => (
  reducer(state, action, actionSignal)
);

export default { initialState, createReducer, reducer };
