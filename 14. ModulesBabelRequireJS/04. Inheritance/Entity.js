class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error('Cannot create instances of abstract class');
        }

        this.name = name;
    }
}

module.exports = Entity;