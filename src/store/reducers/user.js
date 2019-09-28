import {combineReducers, reduceReducers} from 'redux-loop';

import fallback from 'store/transducers/fallback';
import on from 'store/transducers/on';
import requestData from 'store/transducers/requestData';

import {getUserInfo as getUserInfoAction} from 'store/actions/user';
import {
  login as loginAction,
  invalidateToken as invalidateTokenAction,
} from 'store/actions/auth';
import OK from 'store/actions/OK';

import {getUserInfo} from 'services/me';
import {storage} from 'util';

export default combineReducers({
  data: reduceReducers(
    requestData(
      getUserInfoAction.type,
      async () => {
        const token = await storage.token.read();
        return getUserInfo(token);
      },
      () => true,
      () => true,
    ),

    on(OK(loginAction.type), (_, res) => res),

    on(OK(getUserInfoAction.type), (_, res) => res.client),

    on(OK(invalidateTokenAction.type), () => null),

    fallback(null),
  ),
});
