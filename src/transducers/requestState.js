import { simpleSM } from './sm.js';

const state = {
  DEFAULT: 'DEFAULT',
  LOADING: 'LOADING',
  ERR: 'ERR',
  OK: 'OK',
};

const requestState = (typeLoading, typeErr, typeOk) => simpleSM({
  [typeLoading]: state.LOADING,
  [typeErr]: state.ERR,
  [typeOk]: state.OK,
}, state.DEFAULT);

export default requestState;
