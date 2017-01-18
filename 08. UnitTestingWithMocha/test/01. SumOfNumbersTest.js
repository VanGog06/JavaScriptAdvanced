let sum = require('../01. SumOfNumbers').sum;
let expect = require('chai').expect;

describe('Test sum(arr) - sum array of numbers', function() {
    it('should return 3 for [1, 2]', function() {
        let expectedSum = 3;
        let actualSum = sum([1, 2]);

        expect(actualSum).to.be.equal(expectedSum);
    });

    it('should return 1 for [1]', function() {
        expect(sum([1])).to.be.equal(1);
    });

    it('should return 0 for []', function() {
        expect(sum([])).to.be.equal(0);
    });

    it('should return NaN for [\'pesho\']', function() {
        expect(sum(['pesho'])).to.be.NaN;
    });

    it('should return 3 for [2.5, 1.5, -1]', function() {
        expect(sum([2.5, 1.5, -1])).to.be.equal(3);
    })
});