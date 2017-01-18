let Console = require('../05. C#Console.js').Console;
let expect = require('chai').expect;

describe('Console Class Test', function() {
    it('should have method writeLine()', () => {
       expect(typeof Console.writeLine).to.equal('function');
    });

    describe('writeLine with one parameter', function() {
        //wrong tests for 'string' parameter
        it('should return false when only 1 integer parameter is passed', function() {
            let parameter = 12;
            let result = Console.writeLine(parameter);

            expect(typeof parameter).to.equal('number', 'Wrong result with integer parameter');
        });

        it('should return undefined when only 1 number parameter is passed', function() {
            let parameter = 12;
            let result = Console.writeLine(parameter);

            expect(result).to.equal(undefined, 'Wrong result with integer parameter');
        });

        //correct tests for 'string' parameter
        it('should return true when only 1 number parameter is passed', function() {
            let parameter = 'test';
            let result = Console.writeLine(parameter);

            expect(typeof parameter).to.equal('string', 'Wrong result with integer parameter');
        });

        it('should return the parameter value when only 1 string parameter is passed', function() {
            let parameter = 'test';
            let result = Console.writeLine(parameter);

            expect(result).to.equal('test', 'Wrong result with integer parameter');
        });

        it('should throw error оn empty input', () => {
            expect(() => Console.writeLine()).to.throw(TypeError);
        });

        //wrong tests for 'object' parameter
        it('should return undefined when only 1 number parameter is passed', function() {
            let parameter = 12.5;
            let result = Console.writeLine(parameter);

            expect(result).to.equal(undefined, 'Wrong result with integer parameter');
        });

        it('should return true when only 1 number parameter is passed', function() {
            let parameter = 'test';
            let result = Console.writeLine(parameter);

            expect(typeof parameter).to.equal('string', 'Wrong result with integer parameter');
        });

        //correct tests for 'object' parameter
        it('should return undefined when only 1 number parameter is passed', function() {
            let parameter = {name: 'pesho', age: 20};
            let result = Console.writeLine(parameter);

            expect(result).to.equal(JSON.stringify({name: 'pesho', age: 20}), 'Wrong result with integer parameter');
        });

        it('should return true when only 1 number parameter is passed', function() {
            let parameter = {name: 'pesho'};
            let result = Console.writeLine(parameter);

            expect(typeof parameter).to.equal('object', 'Wrong result with integer parameter');
        });
    });

    describe('writeLine with two parameters', function() {
        //wrong tests for first non-string parameter
        it('should throw TypeError for non-string first parameter', function() {
            expect(() => Console.writeLine(12, 'test')).to.throw(TypeError);
        });

        it('should throw TypeError for non-string first parameter', function() {
            expect(() => Console.writeLine(12, 'test', 'test2')).to.throw(TypeError);
        });

        //wrong tests for incorrectly send placeholders
        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{2}{1}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{1}{1}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{0}{2}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{0}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{0}{1}{2}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{13}{1}{2}', 'test', 'test2')).to.throw(RangeError);
        });

        it('should trow RangeError on out-of-range placeholder index', function() {
            expect(() => Console.writeLine('Test {20}', 'first')).to.throw(RangeError);
        });

        it('should throw RangeError for incorrectly send placeholders', function() {
            expect(() => Console.writeLine('{0}{-1}{2}', 'test', 'test2')).to.throw(RangeError);
        });

        //correct tests for correctly send placeholders
        it('should return the passed in message for correctly send placeholders', function() {
            expect(Console.writeLine('{0}{1}', 'test', 'test2')).to.equal('testtest2', 'Incorrect result returned');
        });

        it('should return the passed in message for correctly send placeholders', function() {
            expect(Console.writeLine('{0}{1}', 10, 20)).to.equal('1020', 'Incorrect result returned');
        });

        it('should return the passed in message for correctly send placeholders', function() {
            expect(Console.writeLine('{0}{2}{1}', 10, 20, 30)).to.equal('103020', 'Incorrect result returned');
        });

        it('should return the passed in message for correctly send placeholders', function() {
            expect(Console.writeLine('{0}', 10)).to.equal('10', 'Incorrect result returned');
        });
    });
});