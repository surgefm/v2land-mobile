import { combineReducers, reduceReducers } from 'redux-loop';

import fallback from '../transducers/fallback.js';
import on from '../transducers/on.js';

import {
  login as loginAction
} from '../actions/auth.js';
import OK from '../actions/OK.js';

export default combineReducers({
  data: reduceReducers(
    on(OK(loginAction.type), (_, res) => res.client),

    fallback(null),
  ),
});
