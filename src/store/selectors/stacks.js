const stacksSelector = store => store.stacks;
const eventIdSelector = props => props.eventId;

export const eventStackListSelector = [
  [stacksSelector, eventIdSelector],
  (stacks, eventId) => {

  },
];
