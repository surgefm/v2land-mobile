import { combineReducers } from 'redux-loop';
import eventReducers from './events.js';
import newsReducers from './news.js';

export default (state, action) => {
  if (['FETCH_NEWS_LIST', 'FETCH_NEWS_LIST#OK'].includes(action.type)) {
    return newsReducers(state, action);
  }
  return combineReducers({
    events: eventReducers,
  })(state, action);
};
