import { resolve, format } from 'url';
import config from '../config/const';

const api = path => resolve(config.api, path);

export const get = (path, query = {}, options = {}) =>
  fetch(format({
    pathname: api(path),
    query,
  }), {
    ...options,
    method: 'GET',
  }).then(res => res.json());

export const post = (path, data = {}, options = {}) =>
  fetch(api(path), {
    ...options,
    method: 'POST',
    header: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  }).then(res => res.json());
