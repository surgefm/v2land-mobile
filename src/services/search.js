import {get} from './methods.js';

export const search = async (state, payload) => {
  const res = await get('search', {keyword: payload});
  return {[payload]: res};
};
