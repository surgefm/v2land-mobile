import { combineReducers } from 'redux-loop';
import eventReducers from './events.js';

export default combineReducers({
  events: eventReducers,
});
