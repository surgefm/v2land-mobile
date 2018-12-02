import { postRaw } from './methods.js';

export const login = (_, { username, password }) => postRaw('client/login', { username, password }).then(res => {
  if (res.ok) {
    return res;
  }
  return Promise.reject('用户名或密码错误');
});
