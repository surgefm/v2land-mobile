import { get, post } from './methods.js';

const withCookie = method => (a1, a2, options = {}) => token => {
  options.headers = options.headers || {};
  options.headers.cookie = 'sails.sid=' + token;
  return method(a1, a2, options);
}

const userGet = withCookie(get);

const userPost = withCookie(post);

export const getUserInfo = userGet('client/me');
