import { loop, Cmd } from 'redux-loop';

const consequence = (type, next, input) => (state, action) => {
  if (action.type === type) {
    return loop(state, Cmd.action(next.make(...input(state, action.payload))));
  }
  return state;
};

export default consequence;
