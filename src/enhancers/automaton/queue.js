export default (initialValue, { queue = 'queue', push = 'push' } = {}) => ({
  init: {
    [queue]: initialValue,
  },
  updaters: {
    [push]: ({ [queue]: q }) => value => ({ [queue]: q.concat(value) }),
  },
});
