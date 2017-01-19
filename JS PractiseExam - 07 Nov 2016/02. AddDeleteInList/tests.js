//let createList = require('./02. AddDeleteInList');
let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function(item) {
            data.push(item);
        },
        delete: function(index) {
            if (Number.isInteger(index) && index >= 0 && index < data.length) {
                return data.splice(index, 1)[0];
            } else {
                return undefined;
            }
        },
        toString: function() {
            return data.join(", ");
        }
    };
}

describe('List', function() {
    //let list = {};

    //beforeEach(function() {
        //list = createList();
    //});

    it('should have an add operation', function() {
        expect(typeof (list.add)).to.equal('function', 'List does not have add operation.');
    });

    it('should have an delete operation', function() {
        expect(typeof (list.delete)).to.equal('function', 'List does not have delete operation.');
    });

    it('should have an toString operation', function() {
        expect(typeof (list.toString)).to.equal('function', 'List does not have toString operation.');
    });

    it('data should be empty initially', function() {
        expect(list.toString()).to.equal('', 'data is not initially set to empty,');
    });

    describe('add', function() {
        it('should return correct answer with valid parameter', function() {
            list.add(2);
            expect(list.toString()).to.equal('2', 'Wrong result returned from add.');
        });

        it('should return correct answer with valid parameter', function() {
            list.add(2);
            list.add(-6);
            list.add('string');
            expect(list.toString()).to.equal('2, -6, string', 'Wrong result returned from add.');
        });

        it('should return correct answer with valid parameter', function() {
            list.add({name: 'pesho'});
            list.add(-6);
            list.add('stamat');
            expect(list.toString()).to.equal('[object Object], -6, stamat', 'Wrong result returned from add.');
        });

        it('should return correct answer with valid parameter', function() {
            list.add(50);
            list.add();
            expect(list.toString()).to.equal('50, ', 'Wrong result returned from add.');
        });
    });

    describe('delete', function() {
        it('check if index is non-integer', function() {
            list.add(20);
            list.add('kolio');
            list.add(1);
            expect(list.delete(-3.5)).to.equal(undefined, 'Wrong result returned from delete.');
        });

        it('check if index is non-integer', function() {
            list.add(20);
            list.add('kolio');
            list.add(1);
            expect(list.delete(3.5)).to.equal(undefined, 'Wrong result returned from delete.');
        });

        it('check if index >= list.length', function() {
            list.add(20);
            list.add('kolio');
            list.add(1);
            expect(list.delete(3)).to.equal(undefined, 'Wrong result returned from delete.');
        });

        it('check if index >= list.length', function() {
            list.add(20);
            list.add('kolio');
            list.add(1);
            expect(list.delete(5)).to.equal(undefined, 'Wrong result returned from delete.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            expect(list.delete(1)).to.equal('kolio', 'Delete did not return the correct results with correct index.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            list.delete(2);
            expect(list.toString()).to.equal('20, kolio, kak, 1', 'Delete did not return the correct results with correct index.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            expect(list.delete(0)).to.equal(20, 'Delete did not return the correct results with correct index.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            list.delete(0);
            expect(list.toString()).to.equal('kolio, 23, kak, 1', 'Delete did not return the correct results with correct index.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            expect(list.delete(4)).to.equal(1, 'Delete did not return the correct results with correct index.');
        });

        it('if correct result is return with correct index', function() {
            list.add(20);
            list.add('kolio');
            list.add(23);
            list.add('kak');
            list.add(1);
            list.delete(4);
            expect(list.toString()).to.equal('20, kolio, 23, kak', 'Delete did not return the correct results with correct index.');
        });
    });
});