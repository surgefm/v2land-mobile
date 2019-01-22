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
      if (event.stacks) {
        event.stacks.sort((a, b) => new Date(b) - new Date(a));
      }
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
    let newState = { ...state };
    for (const news of newsList) {
      const stackId = getStackId(news);
      if (
        newState[stackId] &&
        newState[stackId].news &&
        !newState[stackId].news.includes(news.id)
      ) {
        newState = {
          ...newState,
          [stackId]: {
            ...newState[stackId],
            news: [...newState[stackId].news, news.id],
          },
        };
      }
    }
    return newState;
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
