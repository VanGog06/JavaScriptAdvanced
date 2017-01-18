let Turtle = require('./Turtle');

class WaterTurtle extends Turtle {
    constructor(name, age, gender, waterPool) {
        super(name, age, gender);

        this.waterPool = waterPool;
    }

    get currentWaterPool() {
        return this.waterPool;
    }

    travel(waterPool) {
        this.waterPool = waterPool;
        this.grow(5);
    }

    toString() {
        let output = super.toString();
        output += `\nCurrently inhabiting ${this.currentWaterPool}`;

        return output;
    }
}

module.exports = WaterTurtle;