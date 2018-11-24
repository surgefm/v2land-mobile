import { combineReducers } from 'redux-loop';
import eventReducers from './events';
import stackReducers from './stacks';
import newsReducers from './news';

export default combineReducers({
  events: eventReducers,
  stacks: stackReducers,
  news: newsReducers,
});
