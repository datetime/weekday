/**
 * weekday <https://github.com/jonschlinkert/weekday>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

const expect = require('chai').expect;
const weekday = require('../');


describe('weekday()', function () {

  it('should return an object with the number and name of the current weekday', function (done) {
    var actual = weekday();

    expect(actual).to.have.keys(['num', 'name']);
    done();
  });

  it('should return the current weekday name', function (done) {
    var actual = weekday().name;
    expect(actual).to.be.a('string');
    done();
  });

  it('should return the current weekday number', function (done) {
    var actual = weekday().num;
    expect(actual).to.be.a('number');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(1).name;
    expect(actual).to.equal('Monday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(2).name;
    expect(actual).to.equal('Tuesday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(3).name;
    expect(actual).to.equal('Wednesday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(4).name;
    expect(actual).to.equal('Thursday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(5).name;
    expect(actual).to.equal('Friday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(6).name;
    expect(actual).to.equal('Saturday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday(7).name;
    expect(actual).to.equal('Sunday');
    done();
  });


  it('should return the given weekday', function (done) {
    var actual = weekday('1').name;
    expect(actual).to.equal('Monday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('2').name;
    expect(actual).to.equal('Tuesday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('3').name;
    expect(actual).to.equal('Wednesday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('4').name;
    expect(actual).to.equal('Thursday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('5').name;
    expect(actual).to.equal('Friday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('6').name;
    expect(actual).to.equal('Saturday');
    done();
  });

  it('should return the given weekday', function (done) {
    var actual = weekday('7').name;
    expect(actual).to.equal('Sunday');
    done();
  });
});