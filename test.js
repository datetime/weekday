/**
 * weekday <https://github.com/jonschlinkert/weekday>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var assert = require('assert');
var days = require('days');
var weekday = require('./');

describe('weekday()', function () {
  it('should return the name of the current weekday', function () {
    assert.equal(weekday(), days[new Date().getUTCDay()]);
  });

  it('should return a weekday name', function () {
    assert.equal(typeof weekday(1), 'string');
  });

  it('should return a weekday number', function () {
    assert.equal(typeof weekday('Sunday'), 'number');
  });

  it('should return the given weekday', function () {
    assert.equal(weekday(1), 'Sunday');
    assert.equal(weekday(2), 'Monday');
    assert.equal(weekday(3), 'Tuesday');
    assert.equal(weekday(4), 'Wednesday');
    assert.equal(weekday(5), 'Thursday');
    assert.equal(weekday(6), 'Friday');
    assert.equal(weekday(7), 'Saturday');
  });

  it('should return the given weekday', function () {
    assert.equal(weekday('1'), 'Sunday');
    assert.equal(weekday('2'), 'Monday');
    assert.equal(weekday('3'), 'Tuesday');
    assert.equal(weekday('4'), 'Wednesday');
    assert.equal(weekday('5'), 'Thursday');
    assert.equal(weekday('6'), 'Friday');
    assert.equal(weekday('7'), 'Saturday');
  });
});
