'use strict';

var expect = require('chai').expect;
var breakingBadNames = require('./index.js');

describe('breaking-bad-names', function () {
  it('should have a list of all available names', function () {
    expect(isArrayOfStrings(breakingBadNames.all)).to.be.true;
  });

  it('should allow me to return a random name from the list', function () {
    expect(
      breakingBadNames.all.indexOf(breakingBadNames.random()) > -1
    )
      .to.be.true;
  });
});

function isArrayOfStrings (array) {
  return array.every(function (item) {
    return typeof item === 'string';
  });
}