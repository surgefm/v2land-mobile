import { combineReducers, reduceReducers } from 'redux-loop';
import { log } from 'util';

import requestState from 'store/transducers/requestState';
import requestData from 'store/transducers/requestData';
import fallback from 'store/transducers/fallback';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from 'store/actions/events';
import OK from 'store/actions/OK';
import ERR from 'store/actions/ERR';

import { getAll, getEvent } from 'services/events';
import { Event, normalize } from 'store/schemas';

export const fetchEventList = requestData(
  fetchEventListAction.type,
  getAll,
  (state, { eventList }) => {
    let newState = { ...state };
    for (const event of eventList) {
      if (event.stacks) {
        event.stacks.sort((a, b) => new Date(b.time) - new Date(a.time));
      }
      event.updatedAt = new Date(event.updatedAt);
      event.isInTimeline = true;
      const { entities } = normalize(event, Event);
      newState = {
        ...newState,
        ...entities.events,
      };
    }
    return newState;
  },
  (_, err) => {
    // TODO: handle error
    return null;
  },
);

const fetchEventOKHandler = (state, event) => {
  if (event.stacks) {
    event.stacks.sort((a, b) => new Date(b.time) - new Date(a.time));
  }
  const { entities, result } = normalize(event, Event);
  event = entities.events[result];
  event.updatedAt = new Date(event.updatedAt);
  event.isInTimeline = true;

  state = state || [];
  if (state[result] && state[result].newsCount) {
    const oldEvent = state[result];
    event.updateStat = {
      news: event.newsCount - oldEvent.newsCount,
      stack: event.stackCount - oldEvent.stackCount,
    };
  }

  return {
    ...state,
    [result]: event,
  };
};

export const fetchEvent = requestData(
  fetchEventAction.type,
  getEvent,
  fetchEventOKHandler,
  (_, err) => {
    log('FETCH_EVENT#ERR');
    return null;
  },
);

export const eventReducers = combineReducers({
  data: reduceReducers(fetchEventList, fetchEvent, fallback(null)),

  state: (state, action) =>
    requestState(action.type, ERR(action.type), OK(action.type))(state, action),
});

export default eventReducers;
