import { combineReducers } from 'redux-loop';

import requestState from '../transducers/requestState.js';
import requestData from '../transducers/requestData.js';

import { fetchList } from '../actions/events.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

import { getAll } from '../../service/events.js';

export default combineReducers({
  data: requestData(
    fetchList.type,
    getAll,
    (_, res) => res.eventList,
    (_, err) => {
      // TODO: handle error
      return null;
    },
  ),

  state: requestState(fetchList.type, ERR(fetchList.type), OK(fetchList.type)),
});
