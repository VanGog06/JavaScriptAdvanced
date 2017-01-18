class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.sort();
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.list.length) {
            this.list = this.list.filter(a => a != this.list[index]);
            this.sort();
            this.size--;
        } else {
            throw new Error;
        }
    }

    get(index) {
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        } else {
            throw new Error;
        }
    }

    sort() {
        this.list = this.list.sort((a, b) => a - b);
    }
}

let list = new SortedList();
list.add('asd');
list.add('bla');
list.add('suka');
list.remove('1');
console.log(list.get(1));