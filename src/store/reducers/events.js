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
  (state, res) => {
    if (state === null) {
      return res.eventList;
    }
    const eventList = [...res.eventList];
    for (const event of eventList) {
      let alreadyExisting = false;
      for (const item of (state || [])) {
        if (event.id === item.id) {
          alreadyExisting = true;
          break;
        }
      }
      if (!alreadyExisting) {
        eventList.push(event);
      }
    }
    return eventList;
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
      const oldEvent = eventList[i];
      if (oldEvent.newsCount) {
        event.updateStat = {
          news: event.newsCount - oldEvent.newsCount,
          stack: event.stackCount - oldEvent.stackCount,
        };
      }
      for (const oldStack of oldEvent.stack || []) {
        if (!event.stack.map(s => s.id).includes(oldStack.id)) {
          event.stack.push(oldStack);
        } else {
          for (const stack of event.stack) {
            if (stack.id === oldStack.id) {
              for (const oldNews of oldStack.news) {
                if (!stack.news.map(n => n.id).includes(oldNews.id)) {
                  stack.news.push(oldNews);
                }
              }
              break;
            }
          }
        }
      }
      eventList[i] = event;
      return eventList;
    }
  }
  return [...eventList, event];
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
