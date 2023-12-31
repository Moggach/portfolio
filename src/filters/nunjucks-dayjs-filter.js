const dayjs = require("dayjs");

const defaultFormat = "DD MMM YYYY";

function dayjsFilter(date, format = defaultFormat) {
  return dayjs(date).format(format);
}

module.exports = dayjsFilter;
