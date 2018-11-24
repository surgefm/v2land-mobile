const eventsSelector = store => store.events;

export const eventListSelector = [
  eventsSelector,
  events => events.data,
  data => Object.keys(data || {}).map(key => data[key]),
];

export const eventSelector = [
  (state, props) => {
    if (!state.events || !state.events.data) return null;
    return state.events.data[props.eventId];
  },
];
