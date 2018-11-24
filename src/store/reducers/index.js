import { combineReducers } from 'redux-loop';
import eventReducers from './events';
import newsReducers from './news';

export default combineReducers({
  events: eventReducers,
  news: newsReducers,
});
