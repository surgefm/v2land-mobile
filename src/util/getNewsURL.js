import config from '../config/const';

const getNewsURL = (news) => {
  return `${config.site}${news.eventId}/${news.stackId}/${news.id}`;
};

export default getNewsURL;
