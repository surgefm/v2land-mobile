import { eventSelector, eventListSelector } from './events';

const stackIdSelector = (state, props) => props.stackId;
const newsIdSelector = (state, props) => props.newsId;

export const newsSelector = [
  [
    [
      [eventSelector, eventListSelector],
      (event, eventList) => event? [event] : eventList,
    ],
    stackIdSelector,
    newsIdSelector,
  ],
  (events, stackId, newsId) => {
    // I'm sorry.
    for (const event of events) {
      for (const stack of (event.stack || [])) {
        if (!stackId || stack.id === stackId) {
          for (const news of stack.news) {
            if (news.id === newsId) {
              return news;
            }
          }
        }
      }
    }
  },
];
