import { post } from './methods.js';

export const fetchNewsList = (state, payload) => {
  return post('news', payload);
};
