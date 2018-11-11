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

export const fetchAll = combineReducers({
  data: requestData(
    fetchListAction.type,
    getAll,
    (_, res) => res.eventList,
    (_, err) => {
      // TODO: handle error
      return null;
    },
  ),

  state: requestState(
    fetchListAction.type,
    ERR(fetchListAction.type),
    OK(fetchListAction.type)
  ),
});

export const fetchEvent = ({ eventId }) => combineReducers({
  data: requestData(
    fetchEventAction.type,
    getEvent(eventId),
    (_, res) => {
      console.log(res);
      return {};
    },
    (_, err) => null,
  ),
});

export default fetchAll;
