import { combineReducers, reduceReducers } from 'redux-loop';

import on from 'store/transducers/on';
import requestState from 'store/transducers/requestState';
import fallback from 'store/transducers/fallback';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from 'store/actions/events';
import { fetchNewsList as fetchNewsListAction } from 'store/actions/news';
import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';

import { Event, normalize } from 'store/schemas';
import { getStackId } from 'util';

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
