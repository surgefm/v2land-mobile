import { resolve, format } from 'url';
import config from '../config/const';

const api = path => resolve(config.api, path);

export const getRaw = (path, query = {}, options = {}) =>
  fetch(
    format({
      pathname: api(path),
      query,
    }),
    {
      ...options,
      method: 'GET',
    },
  )

export const postRaw = (path, data = {}, options = {}) =>
  fetch(api(path), {
    ...options,
    method: 'POST',
    header: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  })

export const get = (...args) => getRaw(...args).then(res => res.json());
export const post = (...args) => postRaw(...args).then(res => res.json());
