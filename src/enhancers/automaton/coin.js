export default (initialValue, { side = 'side', flip = 'flip' } = {}) => ({
  init: {
    [side]: initialValue,
  },
  updaters: {
    [flip]: ({ [side]: s }) => () => ({ [side]: !s })
  }
});
