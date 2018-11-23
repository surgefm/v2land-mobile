const getEventId = (item) => {
  let eventId = item.eventId;
  if (!eventId && item.event) {
    eventId = typeof item.event === 'number' ? item.event : item.event.id;
  }
  return eventId;
};

export default getEventId;
