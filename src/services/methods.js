import {resolve} from 'url';
import config from 'config/const';
import axios from 'axios';

const api = path => resolve(config.api, path);

export const getRaw = (path, params = {}, options = {}) =>
  axios.get(api(path), {params, ...options});

export const postRaw = (path, data = {}, options = {}) =>
  axios.post(api(path), data, options);

export const get = (...args) => getRaw(...args).then(res => res.data);
export const post = (...args) => postRaw(...args).then(res => res.data);
