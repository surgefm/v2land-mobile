import { combineReducers, reduceReducers } from 'redux-loop';

import requestData from '../transducers/requestData.js';
import on from '../transducers/on.js';
import fallback from '../transducers/fallback.js';
import consequence from '../transducers/consequence.js';

import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';
import {
  login as loginAction,
  saveToken as saveTokenAction,
  initializeTokenFromStorage as initTokenAction,
  invalidateToken as invalidateTokenAction,
} from '../actions/auth.js';
import {
  getUserInfo as getUserInfoAction,
} from '../actions/user.js';

import { login } from '../../services/auth.js';
import { getUserInfo } from '../../services/me.js';
import { storage, id } from '../../util';

export default combineReducers({
  authorized: reduceReducers(
    // Request login
    requestData(loginAction.type, login, () => false, () => false),

    // ACTION: login[OK] -> ACTION: saveToken
    consequence(OK(loginAction.type), saveTokenAction, (_, res) => {
      const token = res.token;
      return [token];
    }),

    // Save token to storage
    requestData(
      saveTokenAction.type,
      (_, tokenValue) => storage.token.save(tokenValue),
      () => true,
      () => true,
    ),

    // Initialize token from client side storage
    on(initTokenAction.type, () => true),

    // Invalidate token
    requestData(
      invalidateTokenAction.type,
      () => storage.token.clear(),
      () => false,
      () => false,
    ),

    fallback(false),
  ),

  token: reduceReducers(
    // Get token from request
    on(OK(saveTokenAction.type), (_, token) => token),

    // Get token from client side storage
    on(initTokenAction.type, (_, token) => token),

    // Reset to null when token was invalidated
    on(OK(invalidateTokenAction.type), () => null),


    // Fetch user infos with token
    consequence(initTokenAction.type, getUserInfoAction),
    requestData(
      getUserInfoAction.type,
      getUserInfo,
      id,
      id,
    ),

    fallback(null),
  ),

  errorMessage: reduceReducers(
    on(ERR(loginAction.type), (_, err) => err.toString()),

    fallback(''),
  ),
});
