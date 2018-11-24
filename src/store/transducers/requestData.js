import { loop, Cmd } from 'redux-loop';
import { simpleSM } from './sm.js';
import createAction from '../actions/createAction.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

const requestData = (type, func, inputOK, inputERR) =>
  simpleSM({
    [type]: (state, payload) =>
      loop(
        state,
        Cmd.run(func, {
          successActionCreator: createAction(OK(type)).make,
          failActionCreator: createAction(ERR(type)).make,
          args: [state, payload],
        }),
      ),

    [OK(type)]: inputOK,
    [ERR(type)]: inputERR,
  });

export default requestData;
