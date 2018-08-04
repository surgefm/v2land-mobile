import { resolve, format } from 'url';

const api = path => resolve('https://langchao.org/api/', path);

export const get = (path, query = {}, options = {}) =>
  fetch(format({
    pathname: api(path),
    query,
  }), {
    ...options,
    method: 'GET',
  });

export const post = (path, data = {}, options = {}) =>
  fetch(api(path), {
    ...options,
    method: 'POST',
    header: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(data),
  });
