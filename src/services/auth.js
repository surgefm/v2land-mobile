import { postRaw } from './methods.js';
import { getTokenStringFromHeader } from 'util';

export const login = (_, { username, password }) =>
  postRaw('client/login', { username, password }).then(res => {
    if (res.ok) {
      const token = getTokenStringFromHeader(res.headers);
      return res.json().then(body => ({ ...body, token }));
    }
    return Promise.reject('用户名或密码错误');
  });
