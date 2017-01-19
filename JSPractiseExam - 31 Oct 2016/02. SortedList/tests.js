let SortedList = require('./02. SortedList');
let expect = require('chai').expect;

describe('SortedList tests', function() {
    let list;

    beforeEach(function() {
        list = new SortedList();
    });

    it('should have an add method', function() {
        expect(SortedList.prototype.hasOwnProperty('add')).to.equal(true, 'Method add cannot be found');
    });

    it('should have a remove method', function() {
        expect(SortedList.prototype.hasOwnProperty('remove')).to.equal(true, 'Method remove cannot be found');
    });

    it('should have a get method', function() {
        expect(SortedList.prototype.hasOwnProperty('get')).to.equal(true, 'Method get cannot be found');
    });

    it('should have a size getter', function() {
        expect(SortedList.prototype.hasOwnProperty('size')).to.equal(true, 'Size getter cannot be found');
    });

    it('should return 0 when size getter is initially called', function() {
        expect(list.size).to.equal(0, 'Wrong size returned');
    });

    it ('should return the correct size', function() {
        list.add(5);
        list.add(16);
        list.add(2);
        list.add(1);

        expect(list.size).to.equal(4, 'Wrong size returned');
    });

    it('should return the correct combination for add method', function() {
        list.add(100);
        list.add(5);
        list.add(23);
        list.add(22);

        expect(list.get(0)).to.equal(5, 'Wrong result returned');
        expect(list.get(1)).to.equal(22, 'Wrong result returned');
        expect(list.get(2)).to.equal(23, 'Wrong result returned');
        expect(list.get(3)).to.equal(100, 'Wrong result returned');
    });

    it('should remove the correct element', function() {
        list.add(100);
        list.add(5);
        list.add(23);
        list.add(22);
        list.remove(2);

        expect(list.get(0)).to.equal(5, 'Wrong result returned');
        expect(list.get(1)).to.equal(22, 'Wrong result returned');
        expect(list.get(2)).to.equal(100, 'Wrong result returned');
    });

    it('should throw error with invalid index', function() {
        list.add(100);
        list.add(5);
        list.add(23);
        list.add(22);

        expect(() => list.remove(-2)).to.throw(Error);
    });

    it('should throw error with invalid index', function() {
        list.add(100);
        list.add(5);
        list.add(23);
        list.add(22);

        expect(() => list.get(23)).to.throw(Error);
    });

    it('should throw error with invalid index', function() {
        expect(() => list.get(0)).to.throw(Error);
    });

    it('should throw error with invalid index', function() {
        expect(() => list.remove(0)).to.throw(Error);
    });
});