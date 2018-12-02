import { combineReducers, reduceReducers } from 'redux-loop';

import on from '../transducers/on.js';
import requestState from '../transducers/requestState.js';
import fallback from '../transducers/fallback.js';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from '../actions/events.js';
import { fetchNewsList as fetchNewsListAction } from '../actions/news.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

import { Event, normalize } from '../schemas';
import { getStackId } from '../../util';

const onFetchEventListOKHandler = on(
  OK(fetchEventListAction.type),
  (state = {}, { eventList }) => {
    let newState = { ...state };
    for (const event of eventList) {
      const { entities } = normalize(event, Event);
      stackList = entities.stacks;
      newState = {
        ...newState,
        ...stackList,
      };
    }
    return newState;
  },
);

const onFetchEventOKHandler = on(
  OK(fetchEventAction.type),
  (state = {}, event) => {
    const { entities } = normalize(event, Event);
    stackList = entities.stacks;
    return {
      ...state,
      ...stackList,
    };
  },
);

const onFetchNewsListOKHandler = on(
  OK(fetchNewsListAction.type),
  (state, { newsList }) => {
    for (const news of newsList) {
      const stackId = getStackId(news);
      if (
        state[stackId] &&
        state[stackId].news &&
        !state[stackId].news.includes(news.id)
      ) {
        return {
          ...state,
          [stackId]: {
            ...state[stackId],
            news: [...state[stackId].news, news.id],
          },
        };
      }
      return state;
    }
  },
);

export const stackReducers = combineReducers({
  data: reduceReducers(
    onFetchEventListOKHandler,
    onFetchEventOKHandler,
    onFetchNewsListOKHandler,
    fallback(null),
  ),

  state: (state, action) =>
    requestState(action.type, ERR(action.type), OK(action.type))(state, action),
});

export default stackReducers;
