import { combineReducers, reduceReducers } from 'redux-loop';

import requestData from '../transducers/requestData.js';
import on from '../transducers/on.js';
import fallback from '../transducers/fallback.js';

import OK from '../actions/OK.js';
import { login as loginAction } from '../actions/auth.js';

import { login } from '../../service/auth.js';

const findTokenString = RegExp.prototype.test.bind(/^sails\.sid/)

export default combineReducers({
  authorized: reduceReducers(
    requestData(
      loginAction.type,
      login,
      () => true,
      () => false,
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
