const eventsSelector = store => store.events;

export const eventListSelector = [
  eventsSelector,
  events => events.data,
  data => data || [],
];

export const eventSelector = [
  (state, props) => {
    if (!state.events || !state.events.data) return [];
    return state.events.data.filter(e => e.id === props.eventId);
  },
  event => event.length ? event[0] : null,
];
