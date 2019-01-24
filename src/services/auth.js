import { postRaw } from './methods.js';

const findTokenString = RegExp.prototype.test.bind(/^sails\.sid/);

export const login = (_, { username, password }) =>
  postRaw('client/login', { username, password }).then(res => {
    if (res.ok) {
      const token = res.headers
        .get('set-cookie')
        .split(';')
        .find(findTokenString)
        .split('=')[1];
      return res.json().then(body => ({ ...body, token }));
    }
    return Promise.reject('用户名或密码错误');
  });
