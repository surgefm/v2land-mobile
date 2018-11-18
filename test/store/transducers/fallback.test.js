import fallback from '../../../src/store/transducers/fallback.js';

describe('fallback', () => {
  let initialState, fallbackReducer;

  beforeEach(() => {
    initialState = {}
    fallbackReducer = fallback(initialState)
  })

  it('should return initialState by default', () => {
    expect(fallbackReducer()).toBe(initialState);
  })

  it('should return the current state', () => {
    const currentState = { x: 1 };
    expect(fallbackReducer(currentState)).toBe(currentState);
  })
})
