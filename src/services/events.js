import {get} from './methods.js';

export const getAll = () => get('event', {status: 'admitted'});
export const getEvent = (state, payload) => {
  return get(`event/${payload.eventId}`);
};
