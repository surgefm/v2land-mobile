import { combineReducers, reduceReducers } from 'redux-loop';
import log from '../../util/log.js';

import requestState from '../transducers/requestState.js';
import requestData from '../transducers/requestData.js';
import fallback from '../transducers/fallback.js';

import {
  fetchEventList as fetchEventListAction,
  fetchEvent as fetchEventAction,
} from '../actions/events.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

import { getAll, getEvent } from '../../service/events.js';
import { Event, normalize } from '../schemas';

export const fetchEventList = requestData(
  fetchEventListAction.type,
  getAll,
  (state, { eventList }) => {
    let newState = { ...state };
    for (const event of eventList) {
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
  const { entities, result } = normalize(event, Event);
  event = entities.events[result];

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
