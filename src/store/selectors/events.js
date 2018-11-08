const eventsSelector = store => store.events;

export const eventListSelector = [
  eventsSelector,
  events => events.data,
  data => data || [],
];
