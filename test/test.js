var assert = require('assert');

import FizzBuzz from '../fizzbuzz'
describe('Basic Mocha String Test', function () {
    
    const fb = new FizzBuzz();
    it('should return true if the number "6" is multiple of three.', function () {
        assert.equal(true, fb.isMultpleOfThree(6));
    });
    
    it('should return false if the number "5" is not multiple of three.', function () {
        assert.equal(false, fb.isMultpleOfThree(5));
    });
})