function generateLinkedList() {
    return (function() {
        let linkedList = [];

        function sort() {
            linkedList.sort((a, b) => a - b);
        }

        function isValidIndex(index) {
            return index >= 0 && index < linkedList.length;
        }

        function add(element) {
            linkedList.push(element);
            sort();
        }

        function remove(index) {
            if (isValidIndex(index)) {
                linkedList.splice(index, 1);
                sort();
            } else {
                throw new Error;
            }
        }

        function get(index) {
            if (isValidIndex(index)) {
                return linkedList[index];
            } else {
                throw new Error;
            }
        }

        function size() {
            return linkedList.length;
        }

        let a = {add, remove, get};
        a.__defineGetter__('size', size);
        return a;
    })();
}

let list = generateLinkedList();
console.log(list.hasOwnProperty('size'));
list.add(5);
//list.get(5);
console.log(list.get(0));