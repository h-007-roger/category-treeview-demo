export const createBaseActionCreator = (type) => () => ({ type });

export const createActionCreator = (type) => (arg, additionalData) => ({
  ...createBaseActionCreator(type)(),
  data: arg,
  additionalData,
});

export const createDeltaAction = function createDeltaAction(base) {
  return `DELTA/${base}`;
};

export const createSignalAction = function createSignalAction(base) {
  const baseActions = ['REQUEST', 'SUCCESS', 'FAILURE', 'PENDING', 'CANCEL', 'CLEAR', 'PROGRESS'].reduce((prev, curr) => {
    const newPrev = prev;
    newPrev[curr] = `SIGNAL/${base}/${curr}`;
    newPrev[curr.toLowerCase()] = createActionCreator(prev[curr]);
    return newPrev;
  }, {});

  baseActions.DELTA = createDeltaAction(base);
  baseActions.delta = createActionCreator(baseActions.DELTA);

  return baseActions;
};
