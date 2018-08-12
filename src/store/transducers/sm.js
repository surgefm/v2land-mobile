export const simpleSM = (states, initialState = null) => (state, action) => (states[action.type] || initialState);
