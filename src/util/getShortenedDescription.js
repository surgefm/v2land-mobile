import trimText from './trimText';

const getShortenedDescription = (description) => {
  const text = trimText(description);
  return text.length > 120
    ? text.slice(0, 120) + '…'
    : text;
};

export default getShortenedDescription;
