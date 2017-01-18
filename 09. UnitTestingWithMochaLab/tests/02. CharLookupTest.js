let lookupChar = require('../02. CharLookup').lookupChar;
let expect = require('chai').expect;

describe('lookupChar()', function() {
    it('should return undefined for non-string first parameter', function() {
        expect(lookupChar(12, 2)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for non-string first parameter', function() {
        expect(lookupChar({name: 'pesho'}, 1)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for non-string first parameter', function() {
        expect(lookupChar('pesho', 1.5)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for non-string first parameter', function() {
        expect(lookupChar('pesho', 1.5)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('pesho', -1.5)).to.equal(undefined, 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('pesho', 7)).to.equal('Incorrect index', 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('pesho', 5)).to.equal('Incorrect index', 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('asdasd', -1)).to.equal('Incorrect index', 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('stamat', 1)).to.equal('t', 'Function did not return the correct result!');
    });

    it('should return undefined for non-integer second parameter', function() {
        expect(lookupChar('stamat', 4)).to.equal('a', 'Function did not return the correct result!');
    });
});