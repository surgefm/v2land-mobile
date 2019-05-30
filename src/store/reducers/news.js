import { combineReducers, reduceReducers } from 'redux-loop';

import on from 'store/transducers/on';
import requestData from 'store/transducers/requestData';
import requestState from 'store/transducers/requestState';
import fallback from 'store/transducers/fallback';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from 'store/actions/events';
import { fetchNewsList as fetchNewsListAction } from 'store/actions/news';
import { fetchNewsList as fetchNewsListService } from 'services/news';

import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';

import { Event, News, normalize } from 'store/schemas';

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
