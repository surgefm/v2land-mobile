export const simpleSM = states => (state, action) => {
  let nextState = states[action.type] || state;
  if (typeof nextState === 'function') {
    nextState = nextState(state, action.payload);
  }
  return nextState;
};
