import { combineReducers, reduceReducers } from 'redux-loop';
import log from '../../util/log.js';

import requestState from '../transducers/requestState.js';
import requestData from '../transducers/requestData.js';
import fallback from '../transducers/fallback.js';

import {
  fetchList as fetchListAction,
  fetchEvent as fetchEventAction,
} from '../actions/events.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

import { getAll, getEvent } from '../../service/events.js';

export const fetchEventList = requestData(
  fetchListAction.type,
  getAll,
  (_, res) => {
    return res.eventList;
  },
  (_, err) => {
    // TODO: handle error
    return null;
  },
);

const fetchEventOKHandler = (state, event) => {
  const eventList = [...state];
  for (let i = 0; i < eventList.length; i++) {
    if (eventList[i].id === event.id) {
      eventList[i] = event;
      return eventList;
    }
  }
  return [...eventList, event];
};

export const fetchEvent = (state, action) => requestData(
  fetchEventAction.type,
  getEvent,
  fetchEventOKHandler,
  (_, err) => {
    log('FETCH_EVENT#ERR');
    return null;
  },
)(state, action);

export const eventReducers = combineReducers({
  data: reduceReducers(
    fetchEventList,
    fetchEvent,
    fallback(null),
  ),

  state: (state, action) => requestState(
    action.type,
    ERR(action.type),
    OK(action.type)
  )(state, action),
});

export default eventReducers;
