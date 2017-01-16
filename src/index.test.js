'use strict';

var expect = require('chai').expect;
var openSourceLibrary = require('./index.js');

describe('starwars-names', function () {
  it('should have a list of all available names', function () {
    expect(isArrayOfStrings(openSourceLibrary.all)).to.be.true;
  });

  it('should allow me to return a random name from the list', function () {
    expect(
      openSourceLibrary.all.indexOf(openSourceLibrary.random()) > -1
    )
      .to.be.true;
  });
});

function isArrayOfStrings (array) {
  return array.every(function (item) {
    return typeof item === 'string';
  });
}