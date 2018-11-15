import { combineReducers } from 'redux-loop';

import requestState from '../transducers/requestState.js';
import requestData from '../transducers/requestData.js';

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

export const fetchEvent = (state, action) => requestData(
  fetchEventAction.type,
  getEvent,
  (_, res) => {
    console.log('FETCH_EVENT#OK');
    return [res];
  },
  (_, err) => {
    console.log('FETCH_EVENT#ERR');
    return _;
  },
)(state, action);

const fetchEventOK = (state, action) => {
  const eventList = [...state];
  const event = action.payload;
  for (let i = 0; i < eventList.length; i++) {
    if (eventList[i].id === event.id) {
      eventList[i] = event;
      return eventList;
    }
  }
  return [...eventList, event];
};

export const eventReducers = combineReducers({
  data: (state, action) => {
    switch (action.type) {
    case fetchListAction.type:
      return fetchEventList(state, action);
    case fetchEventAction.type:
      return fetchEvent(state, action);
    case OK(fetchEventAction.type):
      return fetchEventOK(state, action);
    default:
      return fetchEventList(state, action);
    }
  },

  state: (state, action) => requestState(
    action.type,
    ERR(action.type),
    OK(action.type)
  )(state, action),
});

export default eventReducers;
