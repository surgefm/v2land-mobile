import { reduceReducers } from 'redux-loop';

import fallback from '../transducers/fallback.js';
import on from '../transducers/on.js';

import {
  beginSubscriptionEditing as beginSubscriptionEditingAction,
  endSubscriptionEditing as endSubscriptionEditingAction,
} from '../actions/status.js';

const beginSubscriptionEditing = on(
  beginSubscriptionEditingAction.type,
  (state, action) => {
    const newState = { ...state };
    newState.subscriptions = {
      ...newState.subscriptions,
      [action.eventId]: true,
    };
    return newState;
  },
);

const endSubscriptionEditing = on(
  endSubscriptionEditingAction.type,
  (state, action) => {
    const newState = { ...state };
    newState.subscriptions = {
      ...newState.subscriptions,
      [action.eventId]: false,
    };
    return newState;
  },
);

export const statusReducers = reduceReducers(
  beginSubscriptionEditing,
  endSubscriptionEditing,
  fallback(null),
);

export default statusReducers;
