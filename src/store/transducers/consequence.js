import { loop, Cmd } from 'redux-loop';
import { id } from 'util';

const consequence = (type, next, input = id) => (state, action) => {
  if (action.type === type) {
    return loop(state, Cmd.action(next.make(...input(state, action.payload))));
  }
  return state;
};

export default consequence;
