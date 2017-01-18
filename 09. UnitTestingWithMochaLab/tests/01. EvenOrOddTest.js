let isOddOrEven = require('../01. EvenOrOdd').isOddOrEven;
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('isOddOrEven()', function () {
    it('should return undefined for parameters different from string', function () {
        expect(isOddOrEven(2)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for parameters different from string', function () {
        expect(isOddOrEven({name: 'pesho'})).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return "even" for parameters, whose length can be divided by 2 without reminder', function () {
        assert.equal(isOddOrEven('test'), 'even', 'The length is divided by two with reminder');
    });

    it('should return "odd" for parameters, whose length can not be divided by 2 without reminder', function () {
        expect(isOddOrEven('pesho')).to.equal('odd', 'The length is divided by two without reminder');
    });

    it('with multiple consecutive checks, should return correct values', function() {
        expect(isOddOrEven('cat')).to.equal('odd', 'Function did not return the correct result!');
        expect(isOddOrEven('alabala')).to.equal('odd', 'Function did not return the correct result!');
        expect(isOddOrEven('it is even')).to.equal('even', 'Function did not return the correct result!');
    });
});