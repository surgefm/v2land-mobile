import { combineReducers, reduceReducers } from 'redux-loop';

import requestData from '../transducers/requestData.js';
import on from '../transducers/on.js';
import fallback from '../transducers/fallback.js';
import consequence from '../transducers/consequence.js';

import OK from '../actions/OK.js';
import { login as loginAction, saveToken as saveTokenAction, initializeTokenFromStorage as initTokenAction, invalidateToken as invalidateTokenAction } from '../actions/auth.js';

import { login } from '../../service/auth.js';
import { storage } from '../../util';

const findTokenString = RegExp.prototype.test.bind(/^sails\.sid/)

export default combineReducers({
  authorized: reduceReducers(
    // Request login
    requestData(
      loginAction.type,
      login,
      () => false,
      () => false,
    ),

    // ACTION: login[OK] -> ACTION: saveToken
    consequence(
      OK(loginAction.type),
      saveTokenAction,
      (_, res) => {
        const token = res.headers.get('set-cookie').split(';').find(findTokenString).split('=')[1];
        return [token];
      },
    ),

    // Save token to storage
    requestData(
      saveTokenAction.type,
      (_, tokenValue) => storage.token.save(tokenValue),
      () => true,
      () => true,
    ),

    // Initialize token from client side storage
    on(
      initTokenAction.type,
      () => true,
    ),

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
    on(
      OK(saveTokenAction.type),
      (_, token) => token,
    ),

    // Get token from client side storage
    on(
      initTokenAction.type,
      (_, token) => token,
    ),

    // Reset to null when token was invalidated
    on(
      OK(invalidateTokenAction.type),
      () => null,
    ),

    fallback(null),
  ),
});
