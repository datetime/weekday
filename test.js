/**
 * weekday <https://github.com/jonschlinkert/weekday>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var should = require('should');
var days = require('days');
var weekday = require('./');

describe('weekday()', function () {
  it('should return the name of the current weekday', function () {
    weekday().should.equal(days[new Date().getUTCDay()]);
  });

  it('should return a weekday name', function () {
    weekday(1).should.be.a.string;
  });

  it('should return a weekday number', function () {
    weekday('Sunday').should.be.a.number;
  });

  it('should return the given weekday', function () {
    weekday(1).should.equal('Sunday');
    weekday(2).should.equal('Monday');
    weekday(3).should.equal('Tuesday');
    weekday(4).should.equal('Wednesday');
    weekday(5).should.equal('Thursday');
    weekday(6).should.equal('Friday');
    weekday(7).should.equal('Saturday');
  });

  it('should return the given weekday', function () {
    weekday('1').should.equal('Sunday');
    weekday('2').should.equal('Monday');
    weekday('3').should.equal('Tuesday');
    weekday('4').should.equal('Wednesday');
    weekday('5').should.equal('Thursday');
    weekday('6').should.equal('Friday');
    weekday('7').should.equal('Saturday');
  });
});
