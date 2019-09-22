import {loop, Cmd} from 'redux-loop';
import {simpleSM} from './sm';
import createAction from 'store/actions/createAction';
import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';

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
