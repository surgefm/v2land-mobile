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
  getEvent(action.payload.eventId),
  (_, res) => {
    console.log('FETCH_EVENT#OK');
    return [res];
  },
  (_, err) => {
    console.log('FETCH_EVENT#ERR');
    return _;
  },
)(state, action);

export const eventReducers = combineReducers({
  data: (state, action) => {
    switch (action.type) {
    case 'FETCH_EVENT_LIST':
      return fetchEventList(state, action);
    case 'FETCH_EVENT':
      return fetchEvent(state, action);
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
