import { combineReducers } from 'redux-loop';
import { fetchAll, fetchEvent } from './events.js';

export default combineReducers({
  events: fetchAll,
});

export {
  fetchAll,
  fetchEvent,
};
