'use strict';

var uniqueRandomArray = require('unique-random-array');
var breakingBadNames = require('./breaking-bad-names.json');

module.exports = {
  all: breakingBadNames,
  random: uniqueRandomArray(breakingBadNames)
};