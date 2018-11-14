import _ from 'lodash';

const getTimeLapseString = (time) => {
  if (!time) return;
  if (!_.isDate(time)) {
    try {
      time = new Date(time);
    } catch (err) {
      return;
    }
  }

  const now = new Date();
  const nowTimestamp = Math.floor(now.getTime() / 1000);
  timestamp = Math.floor(time.getTime() / 1000);
  const secondDiff = nowTimestamp - timestamp;
  if (secondDiff < 0) return '未来';
  if (secondDiff < 60) return '刚刚';
  if (secondDiff < 3600) return `${Math.floor(secondDiff / 60)} 分钟前`;

  const dayDiff = now.getDate() - time.getDate();
  if (dayDiff === 0) return '今天';
  if (secondDiff < 3600 * 24) return `${Math.floor(secondDiff / 3600)} 小时前`;
  if (dayDiff === 1) return '昨天';
  return `${dayDiff} 天前`;
};

export default getTimeLapseString;
