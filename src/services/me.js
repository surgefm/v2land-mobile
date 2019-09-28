import {get, post} from './methods.js';

const withAccessToken = method => (a1, a2, options = {}) => token => {
  options.headers = options.headers || {};
  options.headers.Authorization = 'Bearer ' + token;
  return method(a1, a2, options);
};

export const userGet = withAccessToken(get);

export const userPost = withAccessToken(post);

export const getUserInfo = userGet('client/me');
