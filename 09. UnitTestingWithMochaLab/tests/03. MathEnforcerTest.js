let mathEnforcer = require('../03. MathEnforcer').mathEnforcer;
let expect = require('chai').expect;

describe('mathEnforcer', function() {
    describe('addFive', function() {
        it('should return true if mathEnforcer has addFive property', function() {
            expect(mathEnforcer.hasOwnProperty('addFive')).to.equal(true, 'No property addFive was found!');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.addFive('stamat')).to.equal(undefined, 'Wrong result from addFive function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.addFive({name: 'pesho'})).to.equal(undefined, 'Wrong result from addFive function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.addFive(5)).to.equal(10, 'Wrong result from addFive function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.addFive(22.5)).to.equal(27.5, 'Wrong result from addFive function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.addFive(-22.5)).to.equal(-17.5, 'Wrong result from addFive function property');
        });
    });

    describe('subtractTen', function() {
        it('should return true if mathEnforcer has subtractTen property', function() {
            expect(mathEnforcer.hasOwnProperty('subtractTen')).to.equal(true, 'No property subtractTen was found!');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.subtractTen('stamat')).to.equal(undefined, 'Wrong result from subtractTen function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.subtractTen({name: 'pesho'})).to.equal(undefined, 'Wrong result from subtractTen function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.subtractTen(50)).to.equal(40, 'Wrong result from subtractTen function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.subtractTen(72.5)).to.equal(62.5, 'Wrong result from subtractTen function property');
        });

        it('should return undefined for non-numeric argument', function() {
            expect(mathEnforcer.subtractTen(-72.5)).to.equal(-82.5, 'Wrong result from subtractTen function property');
        });
    });

    describe('sum', function() {
        it('should return true if mathEnforcer has sum property', function() {
            expect(mathEnforcer.hasOwnProperty('sum')).to.equal(true, 'No property sum was found!');
        });

        it('should return undefined for non-numeric first argument', function() {
            expect(mathEnforcer.sum('stamat', 10)).to.equal(undefined, 'Wrong result from sum function property');
        });

        it('should return undefined for non-numeric first argument', function() {
            expect(mathEnforcer.sum({name: 'pesho'}, 10)).to.equal(undefined, 'Wrong result from sum function property');
        });

        it('should return undefined for non-numeric second argument', function() {
            expect(mathEnforcer.sum(10, 'stamat')).to.equal(undefined, 'Wrong result from sum function property');
        });

        it('should return undefined for non-numeric second argument', function() {
            expect(mathEnforcer.sum(10, {name: 'pesho'})).to.equal(undefined, 'Wrong result from sum function property');
        });

        it('should return 20 for arg1 = 12 and arg2 = 8', function() {
            expect(mathEnforcer.sum(12, 8)).to.equal(20, 'Wrong result from sum function property');
        });

        it('should return 68 for arg1 = 40.5 and arg2 = 27.5', function() {
            expect(mathEnforcer.sum(40.5, 27.5)).to.equal(68, 'Wrong result from sum function property');
        });

        it('should return 68 for arg1 = 40.5 and arg2 = 27.5', function() {
            expect(mathEnforcer.sum(-40.5, -27.5)).to.equal(-68, 'Wrong result from sum function property');
        });
    });
});