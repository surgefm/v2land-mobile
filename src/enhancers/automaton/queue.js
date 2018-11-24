export default (initialValue, { que = 'que', push = 'push' } = {}) => ({
  init: {
    [que]: initialValue
  },
  updaters: {
    [push]: ({ [que]: q }) => value => ({ [que]: q.concat(value) })
  }
})
