const eventsSelector = store => store.events;
import { getTimeLapseString } from 'util';

export const eventListSelector = [
  eventsSelector,
  events => events.data || [],
  data => Object.keys(data || {}).map(key => data[key]),
  events => events.filter(e => e.isInTimeline),
  events => events.sort((a, b) => b.updatedAt - a.updatedAt),
  events => {
    const res = [];
    for (const event of events) {
      const timeLapse = getTimeLapseString(event.updatedAt, 'general') + '更新';
      if (res.length === 0 || res[res.length - 1].title !== timeLapse) {
        res.push({
          title: timeLapse,
          data: [event],
        });
      } else {
        res[res.length - 1].data.push(event);
      }
    }
    return res;
  },
];

export const eventSelector = [
  (state, props) => {
    if (!state.events || !state.events.data) return null;
    return state.events.data[props.eventId];
  },
];
