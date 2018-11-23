const getEventId = (item) => {
  let eventId = item.eventId;
  if (!eventId && item.event) {
    eventId = typeof item.event === 'object' ? item.event.id : item.event;
  }
  return eventId;
};

export default getEventId;
