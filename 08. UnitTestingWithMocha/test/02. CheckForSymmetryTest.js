let isSymmetric = require('../02. CheckForSymmetry').isSymmetric;
let expect = require('chai').expect;

describe('Test isSymmetric(arr) - are array numbers symmetric', function() {
    it ('should return true for [1,2,3,3,2,1]', function() {
        expect(true).to.be.equal(isSymmetric([1,2,3,3,2,1]));
    });

    it ('should return false for [1,2,3,4,2,1]', function() {
        expect(false).to.be.equal(isSymmetric([1,2,3,4,2,1]));
    });

    it ('should return true for [-1, 2, 1]', function() {
        expect(true).to.be.equal(isSymmetric([-1,2,-1]));
    });

    it ('should return false for [-1,2,1]', function() {
        expect(false).to.be.equal(isSymmetric([-1,2,1]));
    });

    it ('should return false for [1,2]', function() {
        expect(false).to.be.equal(isSymmetric([1,2]));
    });

    it ('should return true for [1]', function() {
        expect(true).to.be.equal(isSymmetric([1]));
    });

    it ('should return true for [5, "hi",{a:5}, new Date(), {a:5}, "hi", 5]', function() {
        expect(true).to.be.equal(isSymmetric([5, "hi",{a:5}, new Date(), {a:5}, "hi", 5]));
    });

    it ('should return true for [4, "hi",{a:5}, new Date(), {a:5}, "hi", 5]', function() {
        expect(true).to.be.equal(isSymmetric([5, "hi",{a:5}, new Date(), {a:5}, "hi", 5]));
    });

    it ('should return false for 1,2,2,1', function() {
        expect(false).to.be.equal(isSymmetric(1,2,2,1));
    });
});