import {combineReducers, reduceReducers} from 'redux-loop';

import requestData from 'store/transducers/requestData';
import on from 'store/transducers/on';
import fallback from 'store/transducers/fallback';
import consequence from 'store/transducers/consequence';

import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';
import {
  login as loginAction,
  saveToken as saveTokenAction,
  initializeTokenFromStorage as initTokenAction,
  invalidateToken as invalidateTokenAction,
} from 'store/actions/auth';
import {getUserInfo as getUserInfoAction} from 'store/actions/user';

import {login} from 'services/auth';
import {getUserInfo} from 'services/me';
import {storage, id} from 'util';

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
    requestData(getUserInfoAction.type, getUserInfo, id, id),

    fallback(null),
  ),

  errorMessage: reduceReducers(
    on(ERR(loginAction.type), (_, err) => err.toString()),

    fallback(''),
  ),
});
