const weekdays = [
  '星期日',
  '星期一',
  '星期二',
  '星期三',
  '星期四',
  '星期五',
  '星期六',
];

/**
 * @param {Date|String|Number} time 时间
 */
const getTimeString = (
  time,
  options = {
    showWeekday: true,
    forceShowYear: undefined,
    withSpaceBetween: false,
  },
) => {
  if (!time) return;
  try {
    time = new Date(time);
  } catch (err) {
    return;
  }

  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const weekday = weekdays[time.getDay()];
  const space = options.withSpaceBetween ? ' ' : '';
  let showYear = options.forceShowYear;
  showYear =
    typeof showYear === 'undefined'
      ? year !== new Date().getFullYear()
      : showYear;

  let str = `${month}${space}月${space}${date}${space}日`;
  if (showYear) {
    str = `${year}${space}年${space}${str}`;
  }
  if (options.showWeekday) {
    str += ` ${weekday}`;
  }
  return str;
};

export default getTimeString;
