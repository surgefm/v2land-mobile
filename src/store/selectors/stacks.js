export const stackStateSelector = state => state.stacks.data;

export const stackIdSelector = (state, props) => typeof props === 'number' ? props : props.stackId;

export const stackSelector = [
  [stackStateSelector, stackIdSelector],
  (state, stackId) => state[stackId],
];
