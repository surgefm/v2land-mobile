import config from '../config/const';

const getNewsURL = news => {
  let eventId = news.eventId;
  if (!eventId) {
    eventId = typeof news.event === 'number' ? news.event : news.event.id;
  }

  let stackId = news.eventId;
  if (!stackId) {
    stackId = typeof news.stack === 'number' ? news.stack : news.stack.id;
  }

  return `${config.site}${eventId}/${stackId}/${news.id}`;
};

export default getNewsURL;
