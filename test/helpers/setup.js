/**
 * Assertion and testing utilities
 */
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

GLOBAL.AssertionError = chai.AssertionError;
GLOBAL.expect = chai.expect;
