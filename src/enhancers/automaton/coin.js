export default (initialValue, { side = 'side', flip = 'flip' } = {}) => ({
  init: {
    [side]: initialValue,
  },
  updaters: {
    [flip]: ({ [side]: s }) => (nextSide = !s) => ({ [side]: nextSide }),
  },
});
