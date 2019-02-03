import { combineReducers } from 'redux-loop';
import events from './events';
import stacks from './stacks';
import news from './news';
import auth from './auth.js';
import user from './user.js';
import status from './status.js';

export default combineReducers({
  events,
  stacks,
  news,
  auth,
  user,
  status,
});
