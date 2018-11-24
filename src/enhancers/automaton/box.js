export default (initialValue, { box = 'box', fill = 'fill' } = {}) => ({
  init: {
    [box]: initialValue,
  },
  updaters: {
    [fill]: () => (b) => ({ [box]: b })
  }
})
