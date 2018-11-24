import config from '../config/const';

const getEventURL = event => {
  return `${config.site}${event.id}`;
};

export default getEventURL;
