/**
 * Export lodash globally
 */
global._ = require('lodash');

/**
 * Export `expect` globally
 */
global.expect = require('chai').expect;

/**
 * Require the subject under test
 */
require('..');

/**
 * Reset inflections befor each test
 */
beforeEach(function() {
  _.resetInflections();
});
