import { combineReducers } from 'redux-loop';
import eventReducers, { fetchEventList, fetchEvent } from './events.js';

export default combineReducers({
  events: eventReducers,
});
