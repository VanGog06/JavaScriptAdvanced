let expect = require('chai').expect;

function createList() {
    let data = [];
    return {
        add: function (item) {
            data.push(item)
        },
        shiftLeft: function () {
            if (data.length > 1) {
                let first = data.shift();
                data.push(first);
            }
        },
        shiftRight: function () {
            if (data.length > 1) {
                let last = data.pop();
                data.unshift(last);
            }
        },
        swap: function (index1, index2) {
            if (!Number.isInteger(index1) || index1 < 0 || index1 >= data.length ||
                !Number.isInteger(index2) || index2 < 0 || index2 >= data.length ||
                index1 === index2) {
                return false;
            }
            let temp = data[index1];
            data[index1] = data[index2];
            data[index2] = temp;
            return true;
        },
        toString: function () {
            return data.join(", ");
        }
    };
}

describe('createList', function() {
    let list = {};

    beforeEach(function() {
        list = createList();
    });

    it('should have add operation', function() {
        expect(createList).to.exist;
    });

    it('should have add operation', function() {
        expect(createList).to.equal(createList);
    });

    it('should have add operation', function() {
        expect(typeof (list.add)).to.equal('function', 'Add operation does not exist.');
    });

    it('should have shiftLeft operation', function() {
        expect(typeof (list.shiftLeft)).to.equal('function', 'shiftLeft operation does not exist.');
    });

    it('should have shiftRight operation', function() {
        expect(typeof (list.shiftRight)).to.equal('function', 'shiftRight operation does not exist.');
    });

    it('should have swap operation', function() {
        expect(typeof (list.swap)).to.equal('function', 'swap operation does not exist.');
    });

    it('should have toString operation', function() {
        expect(typeof (list.toString)).to.equal('function', 'toString operation does not exist.');
    });

    it('data property should be initially set to empty', function() {
        expect(list.toString()).to.equal('', 'The data property is not initially set to empty.');
    });

    describe('add', function() {
        it('add property should add the correct data', function() {
            list.add(5);
            expect(list.toString()).to.equal('5', 'Add did not add the correct data');
        });

        it('add property should add the correct data', function() {
            list.add(5);
            list.add('pesho');
            list.add();
            list.add(-5);
            list.add({name: 'pesho'});
            expect(list.toString()).to.equal('5, pesho, , -5, [object Object]', 'Add did not add the correct data');
        });
    });

    describe('shiftLeft', function() {
        it('should not work if the length of data is 1 or less', function() {
            list.add(5);
            list.shiftLeft();
            expect(list.toString()).to.equal('5', `shilfLeft is not working correctly when length of data is 1 or less`);
        });

        it('should not work if the length of data is 1 or less', function() {
            list.shiftLeft();
            expect(list.toString()).to.equal('', `shilfLeft is not working correctly when length of data is 1 or less`);
        });

        it('should shift the first element and push it to the back of the array', function() {
            list.add(5);
            list.add('pesho');
            list.add(53);
            list.shiftLeft();
            expect(list.toString()).to.equal('pesho, 53, 5', `shilfLeft did not shift the first element and push it to the back of the array`);
        });

        it('should shift the first element and push it to the back of the array', function() {
            list.add(5);
            list.add(53);
            list.shiftLeft();
            expect(list.toString()).to.equal('53, 5', `shiftRight did not shift the first element and push it to the back of the array`);
        });
    });

    describe('shiftRight', function() {
        it('should not work if the length of data is 1 or less', function() {
            list.add(5);
            list.shiftRight();
            expect(list.toString()).to.equal('5', `shiftRight is not working correctly when length of data is 1 or less`);
        });

        it('should not work if the length of data is 1 or less', function() {
            list.shiftRight();
            expect(list.toString()).to.equal('', `shiftRight is not working correctly when length of data is 1 or less`);
        });

        it('should shift the first element and push it to the back of the array', function() {
            list.add(5);
            list.add('pesho');
            list.add(53);
            list.shiftRight();
            expect(list.toString()).to.equal('53, 5, pesho', `shiftRight did not shift the first element and push it to the back of the array`);
        });

        it('should shift the first element and push it to the back of the array', function() {
            list.add(5);
            list.add(53);
            list.shiftRight();
            expect(list.toString()).to.equal('53, 5', `shiftRight did not shift the first element and push it to the back of the array`);
        });
    });

    describe('swap', function() {
        //index1
        it('should not swap elements if index1 is not integer', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(3.3, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with non-integer index1');
        });

        it('should return false for non-integer index1', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(3.3, 2)).to.equal(false, 'Swap did not return false with non-integer index1');
        });

        it('should not swap elements if index1 is not integer', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(-3.3, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with non-integer index1');
        });

        it('should return false for non-integer index1', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(-3.3, 2)).to.equal(false, 'Swap did not return false with non-integer index1');
        });

        it('should not swap elements if index1 is negative', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(-3, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with negative index1');
        });

        it('should return false for negative index1', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(-3, 2)).to.equal(false, 'Swap did not return false with negative index1');
        });

        it('should not swap elements if index1 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(3, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index1 is >= data.length')
        });

        it('should not swap elements if index1 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(5, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index1 is >= data.length')
        });

        it('should return false if index1 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(3, 2)).to.equal(false, 'Swap did not return false when index1 is >= data.length')
        });

        it('should not swap elements if index1 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(5, 2)).to.equal(false, 'Swap did not return false when index1 is >= data.length')
        });

        //index2
        it('should not swap elements if index2 is not integer', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(2, 3.3);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with non-integer index2');
        });

        it('should return false for non-integer index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(2, 3.3)).to.equal(false, 'Swap did not return false with non-integer index2');
        });

        it('should not swap elements if index2 is not integer', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(2, -3.3);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with non-integer index2');
        });

        it('should return false for non-integer index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(2, -3.3)).to.equal(false, 'Swap did not return false with non-integer index2');
        });

        it('should not swap elements if index2 is negative', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(2, -3);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements with negative index2');
        });

        it('should return false for negative index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(2, -3)).to.equal(false, 'Swap did not return false with negative index2');
        });

        it('should not swap elements if index2 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(2, 3);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index2 is >= data.length');
        });

        it('should not swap elements if index2 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(2, 5);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index2 is >= data.length');
        });

        it('should return false if index2 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(2, 3)).to.equal(false, 'Swap did not return false when index2 is >= data.length');
        });

        it('should not swap elements if index2 is >= data.length', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(2, 5)).to.equal(false, 'Swap did not return false when index2 is >= data.length');
        });

        //index1 === index2
        it('should not swap elements if index1 === index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(1, 1);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index1 === index2');
        });

        it('should return false if index1 === index', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(1, 1)).to.equal(false, 'Swap did not return false when index2 is >= data.length');
        });

        it('should not swap elements if index1 === index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(-2, -2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index1 === index2');
        });

        it('should return false if index1 === index', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(-2, -2)).to.equal(false, 'Swap did not return false when index2 is >= data.length');
        });

        it('should not swap elements if index1 === index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(0, 0);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when index1 === index2');
        });

        it('should return false if index1 === index', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(0, 0)).to.equal(false, 'Swap did not return false when index2 is >= data.length');
        });

        //one of the indexes does not exist
        it('should not swap elements if one of the indexes does not exist', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(0);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when one of the indexes does not exist');
        });

        it('should return false if one of the indexes does not exist', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(0)).to.equal(false, 'Swap did not return false when when one of the indexes does not exist');
        });

        it('should not swap elements if one of the indexes does not exist', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(undefined, 2);
            expect(list.toString()).to.equal('33, pesho, 55', 'Swap swapped the elements when one of the indexes does not exist');
        });

        it('should return false if one of the indexes does not exist', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(undefined, 2)).to.equal(false, 'Swap did not return false when when one of the indexes does not exist');
        });

        //true
        it('should swap the elements with correct index1 and index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.swap(0, 1);
            expect(list.toString()).to.equal('pesho, 33, 55', 'Swap did not swap the elements with correct index1 and index2');
        });

        it('should return true with correct parameters', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            expect(list.swap(0, 1)).to.equal(true, 'Swap did not return true when correct parameters were passes');
        });

        it('should swap the elements with correct index1 and index2', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.add('stamat');
            list.add(123);
            list.swap(0, 4);
            expect(list.toString()).to.equal('123, pesho, 55, stamat, 33', 'Swap did not swap the elements with correct index1 and index2');
        });

        it('should return true with correct parameters', function() {
            list.add(33);
            list.add('pesho');
            list.add(55);
            list.add('stamat');
            list.add(123);
            expect(list.swap(0, 4)).to.equal(true, 'Swap did not return true when correct parameters were passes');
        });
    });
});