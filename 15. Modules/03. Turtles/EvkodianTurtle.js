let Turtle = require('./Turtle');

class EvkodianTurtle extends Turtle {
    constructor(name, age, gender, evkodium) {
        super(name, age, gender);

        this._evkodium = evkodium;
    }

    get evkodium() {
        let density = 0;
        let obj = {};

        if (this.gender == 'male') {
            density = Number(this.age * 3);
        } else {
            density = Number(this.age * 2);
        }

        obj['value'] = this._evkodium;
        obj['density'] = density;

        return obj;
    }

    toString() {
        let output = super.toString();
        output += `\nEvkodium: ${this.evkodium['value'] * this.evkodium['density']}`;

        return output;
    }
}

module.exports = EvkodianTurtle;