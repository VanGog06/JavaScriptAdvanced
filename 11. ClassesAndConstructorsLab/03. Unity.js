class Rat {
    constructor(name) {
        this.name = name;
        this.rats = [];
    }

    unite(otherRat) {
        if (otherRat instanceof Rat) {
            this.rats.push(otherRat);
        }
    }

    getRats() {
        return this.rats;
    }

    toString() {
        let final = this.name + '\n';

        for (let rat of this.rats) {
            final += '##' + rat.name + '\n';
        }

        return final;
    }
}

let rat1 = new Rat('pepi');
let rat2 = new Rat('pepa');
let rat3 = new Rat('pepo');
let rat4 = new Rat('pepu');

rat1.unite(rat2);
rat1.unite(rat3);
rat1.unite(rat4);

console.log(rat1.toString());