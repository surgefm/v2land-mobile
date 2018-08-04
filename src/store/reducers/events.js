import { combineReducers } from 'redux-loop';
import requestState from '../../transducers/requestState.js';
import { fetchList } from '../actions/events.js';
import OK from '../actions/OK.js';
import ERR from '../actions/ERR.js';

export default combineReducers({
  state: requestState(fetchList.type, ERR(fetchList.type), OK(fetchList.type)),
});
