import {getRaw} from './methods.js';
import config from '../config/const';

export const login = (_, {username, password}) =>
  getRaw('oauth2/grant', {
    username,
    password,
    authorizationClientId: config.authorizationClientId,
    grant_type: 'client_credentials',
  }).then(res => {
    if (res.status === 201) {
      return res.data;
    }
    return Promise.reject('用户名或密码错误');
  });
