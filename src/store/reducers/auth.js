import { combineReducers, reduceReducers } from 'redux-loop';

import requestData from '../transducers/requestData.js';
import on from '../transducers/on.js';
import fallback from '../transducers/fallback.js';
import consequence from '../transducers/consequence.js';

import OK from '../actions/OK.js';
import { login as loginAction, saveToken as saveTokenAction } from '../actions/auth.js';

import { login } from '../../service/auth.js';
import { storage } from '../../util';

const findTokenString = RegExp.prototype.test.bind(/^sails\.sid/)

export default combineReducers({
  authorized: reduceReducers(
    requestData(
      loginAction.type,
      login,
      () => false,
      () => false,
    ),
    consequence(
      OK(loginAction.type),
      saveTokenAction,
      (_, res) => {
        const token = res.headers.get('set-cookie').split(';').find(findTokenString).split('=')[1];
        return [token];
      },
    ),
    requestData(
      saveTokenAction.type,
      (_, tokenValue) => storage.token.save(tokenValue),
      () => true,
      () => true,
    ),
    fallback(false),
  ),

  token: reduceReducers(
    on(
      OK(loginAction.type),
      (_, res) => res.headers.get('set-cookie').split(';').find(findTokenString).split('=')[1]
    ),
    fallback(null),
  ),
});
