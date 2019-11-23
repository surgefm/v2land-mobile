import {post} from './methods.js';

export const register = async (_, {username, password, email}) =>
  post('client/register', {
    username,
    password,
    email,
  });
