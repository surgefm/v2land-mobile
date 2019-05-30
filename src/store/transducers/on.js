import id from 'util/id';

const on = (type, reducer) => (state, action) =>
  (action.type === type ? reducer : id)(state, action.payload);

export default on;
