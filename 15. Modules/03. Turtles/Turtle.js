class Turtle {
    constructor(name, age, gender) {
        if (new.target === Turtle) {
            throw new Error;
        }

        this._name = name;
        this._age = age;
        this._gender = gender;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get gender() {
        return this._gender;
    }

    grow(age) {
        this._age = this.age + age;
    }

    toString() {
        let output = `Turtle: ${this.name}\n`;
        output += `Aged - ${this.age}; Gender - ${this.gender}`;

        return output;
    }
}

module.exports = Turtle;