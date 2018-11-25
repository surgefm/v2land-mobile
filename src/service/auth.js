import { postRaw } from './methods.js';

export const login = (_, { username, password }) => postRaw('client/login', { username, password });
