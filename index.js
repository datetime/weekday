/**
 * weekday <https://github.com/jonschlinkert/weekday>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

var weekdays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

module.exports = function (num) {
  var day = Number(num || new Date().getUTCDay());

  return {
    num: day,
    name: weekdays[day - 1]
  }
};