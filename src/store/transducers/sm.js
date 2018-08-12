export const simpleSM = (states, initialState = null) => (state, action) => {
  let nextState = (states[action.type] || initialState);
  if (typeof nextState === 'function') nextState = nextState(state, action.payload);
  return nextState;
};
