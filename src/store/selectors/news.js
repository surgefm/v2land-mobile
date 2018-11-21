import reselect from 're-select';
import { eventSelector, eventListSelector } from './events';

export const newsSelector = (state, props) => {
  if (props.newsId === undefined) return;
  const newsId = props.newsId;

  let event;
  if (props.eventId !== undefined) {
    event = reselect(eventSelector)(state, props);
  }
  const events = event ? [event] : reselect(eventListSelector)(state, props);
  const stackId = props.stackId;
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
};
