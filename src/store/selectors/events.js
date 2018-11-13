const eventsSelector = store => store.events;

export const eventListSelector = [
  eventsSelector,
  events => events.data,
  data => data || [],
];

export const eventSelector = [
  (state, props) => {
    if (!state.events || !state.events.data) return null;
    for (const event of state.events.data) {
      if (event.id === props.eventId) {
        return event;
      }
    }
    return null;
  },
];
