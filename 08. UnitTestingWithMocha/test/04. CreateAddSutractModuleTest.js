let createCalculator = require('../04. CreateAddSubtractModule').addSubtractModule;
let expect = require('chai').expect;

describe('Test addSubtractModule', function() {
    let calc;
    beforeEach(function() {
        calc = createCalculator();
    });

    it ('should return 0 for (get())', function() {
        expect(0).to.be.equal(calc.get());
    });

    it ('should return 5 for (add(2); add(3); get())', function() {
        calc.add(3); calc.add(2); let sum = calc.get();
        expect(5).to.be.equal(sum);
    });

    it ('should return -5 for (subtract(2); subtract(3); get())', function() {
        calc.subtract(3); calc.subtract(2); let sum = calc.get();
        expect(-5).to.be.equal(sum);
    });

    it ('should return 4.4 for (add(5.3); subtract(1.1); get())', function() {
        calc.add(5.3); calc.subtract(1.1); let sum = Number(calc.get().toFixed(1));
        expect(4.2).to.be.equal(sum);
    });

    it ('should return 2 for (add(10); subtract(7); add(-2); subtract(-1); get())', function() {
        calc.add(10); calc.subtract(7); calc.add(-2); calc.subtract(-1);
        let sum = calc.get();
        expect(2).to.be.equal(sum);
    });

    it ('should return NaN for (add("hello"); get())', function() {
        calc.add('hello'); let sum = calc.get();
        expect(Number.isNaN(sum)).to.be.equal(true);
    });

    it ('should return NaN for (subtract("hello"); get())', function() {
        calc.subtract('hello'); let sum = calc.get();
        expect(Number.isNaN(sum)).to.be.equal(true);
    });
});