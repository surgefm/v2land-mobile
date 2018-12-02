import { loop, Cmd } from 'redux-loop';
import createAction from '../actions/createAction.js';

const consequence = (type, next, input) => (state, action) => {
  if (action.type === type) {
    return loop(
      state,
      Cmd.action(next.make(...input(state, action.payload))),
    );
  }
  return state;
};

export default consequence;
