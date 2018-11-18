import { simpleSM } from '../../../src/store/transducers/sm.js';

describe('simpleSM', () => {
  const action = type => ({ type })
  const actions = {
    FOREIGN: action('FOREIGN'),
    TYPE: action('TYPE'),
    OK: action('OK'),
    ERR: action('ERR'),
  }
  let sm, functionalSm;

  beforeEach(() => {
    sm = simpleSM({
      TYPE: 'data',
      OK: 'OK',
      ERR: 'ERR',
    })

    functionalSm = simpleSM({
      TYPE: () => 'data',
      OK: () => 'OK',
      ERR: () => 'ERR',
    })
  })

  it('should not modify the state if none match', () => {
    const state = 1;
    expect(sm(state, actions.FOREIGN)).toBe(state);

    const refState = {};
    expect(sm(refState, actions.FOREIGN)).toBe(refState);
  })

  it('should return the proper state', () => {
    const state = {}

    expect(sm(state, actions.TYPE)).toBe('data')
    expect(sm(state, actions.OK)).toBe('OK')
    expect(sm(state, actions.ERR)).toBe('ERR')

    expect(functionalSm(state, actions.TYPE)).toBe('data')
    expect(functionalSm(state, actions.OK)).toBe('OK')
    expect(functionalSm(state, actions.ERR)).toBe('ERR')
  })
})
