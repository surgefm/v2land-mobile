import { loop, Cmd } from 'redux-loop';
import { simpleSM } from './sm.js';
import createAction from '../actions/createAction.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

const requestData = (type, func, inputOK, inputERR) => simpleSM(
  [type]: (state, payload) => loop(
    null,
    Cmd.run(
      (state, payload) => func,
      {
        successActionCreator: createAction(OK(type)),
        failActionCreator: createAction(ERR(type)),
      }
    )
  ),

  [OK(type)]: inputOK,
  [ERR(type)]: inputERR,
);
