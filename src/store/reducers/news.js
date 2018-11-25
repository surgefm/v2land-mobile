import { combineReducers, reduceReducers } from 'redux-loop';

import on from '../transducers/on.js';
import requestData from '../transducers/requestData.js';
import requestState from '../transducers/requestState.js';
import fallback from '../transducers/fallback.js';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from '../actions/events.js';
import {
  fetchNewsList as fetchNewsListAction,
} from '../actions/news.js';
import {
  fetchNewsList as fetchNewsListService,
} from '../../service/news';

import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

import { Event, News, normalize } from '../schemas';

const onFetchEventListOKHandler = on(
  OK(fetchEventListAction.type),
  (state = {}, { eventList }) => {
    let newState = { ...state };
    for (const event of eventList) {
      const { entities } = normalize(event, Event);
      newsList = entities.news;
      newState = {
        ...newState,
        ...newsList,
      };
    }
    return newState;
  },
);

const onFetchEventOKHandler = on(
  OK(fetchEventAction.type),
  (state = {}, event) => {
    const { entities } = normalize(event, Event);
    newsList = entities.news;
    return {
      ...state,
      ...newsList,
    };
  },
);

const fetchNewsList = requestData(
  fetchNewsListAction.type,
  fetchNewsListService,
  (state = {}, { newsList }) => {
    let newState = { ...state };
    for (const news of newsList) {
      const { entities } = normalize(news, News);
      list = entities.news;
      newState = {
        ...newState,
        ...list,
      };
    }
    return newState;
  },
  () => {},
);

export const newsReducers = combineReducers({
  data: reduceReducers(
    fetchNewsList,
    onFetchEventListOKHandler,
    onFetchEventOKHandler,
    fallback(null),
  ),

  state: (state, action) =>
    requestState(action.type, ERR(action.type), OK(action.type))(state, action),
});

export default newsReducers;
