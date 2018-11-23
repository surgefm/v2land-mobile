import { reduceReducers } from 'redux-loop';
import { getEventId, getStackId } from '../../util';

import requestData from '../transducers/requestData.js';
import fallback from '../transducers/fallback.js';

import { fetchNewsList as fetchNewsListAction } from '../actions/news.js';
import { fetchNewsList as fetchNewsListService } from '../../service/news.js';

const fetchNewsListOKHandler = (state, { payload, type }) => {
  if (type !== 'FETCH_NEWS_LIST#OK' || !payload || !payload.newsList) {
    return { ...state };
  }

  const { newsList } = payload;
  const events = [...state.events.data];

  for (const news of newsList) {
    const eventId = getEventId(news);
    const stackId = getStackId(news);
    let inserted = false;
    for (const event of events) {
      if (eventId === event.id) {
        for (const stack of event.stack) {
          if (stackId === stack.id) {
            let alreadyExisted = false;
            for (const item of stack.news) {
              if (item.id === news.id) {
                alreadyExisted = true;
                break;
              }
            }
            if (!alreadyExisted) {
              stack.news.push(news);
            }
            inserted = true;
            break;
          }
        }

        if (inserted) {
          break;
        } else {
          event.stack.push({ id: stackId, news: [news] });
        }
      }
    }

    if (!inserted) {
      events.push({
        id: eventId,
        stack: [{ id: stackId, news: [news] }],
      });
    }
  }

  return {
    ...state,
    events: {
      state: state.events.state,
      data: events,
    },
  };
};

export const fetchNewsList = requestData(
  fetchNewsListAction.type,
  fetchNewsListService,
  fetchNewsListOKHandler,
  (_, err) => {
    // TODO: handle error
    return null;
  },
);

export const newsReducers = reduceReducers(
  fetchNewsList,
  fetchNewsListOKHandler,
  fallback(null),
);

export default newsReducers;
