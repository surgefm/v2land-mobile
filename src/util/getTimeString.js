import _ from 'lodash';

const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];

/**
 * @param {Date|String|Number} time 时间
 */
const getTimeString = (time) => {
  if (!time) return;
  if (!_.isDate(time)) {
    try {
      time = new Date(time);
    } catch (err) {
      return;
    }
  }

  const month = time.getMonth() + 1;
  const date = time.getDate();
  const weekday = weekdays[time.getDay()];

  return `${month}月${date}日 ${weekday}`;
};

export default getTimeString;
