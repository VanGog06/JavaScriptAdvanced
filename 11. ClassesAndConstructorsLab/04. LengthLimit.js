class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength -= value;
        if (this.innerLength < 3) {
            this.innerLength = 0;
        }
    }

    toString() {
        if (this.innerString.length > this.innerLength) {
            let final = this.innerString.substr(0, this.innerLength) + '...';
            return final;
        } else if (this.innerLength == 0) {
            return '...';
        } else {
            return this.innerString;
        }
    }
}

let str = new Stringer('peshopesho', 0);
console.log(str.toString());
str.increase = 7;
console.log(str.toString());
str.decrease = 3;
console.log(str.toString());
str.increase = 17;
console.log(str.toString());
