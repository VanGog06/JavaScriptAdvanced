let f = (function() {
    let uniqueId = 0;

    return class Extensible {
        constructor() {
            this.id = uniqueId++;
        }

        extend(otherObject) {
            for (let prop of Object.keys(otherObject)) {
                if (otherObject.hasOwnProperty(prop)) {
                    if (typeof otherObject[prop] == 'function') {
                        Extensible.prototype[prop] = otherObject[prop];
                    } else {
                        this[prop] = otherObject[prop];
                    }
                }
            }
        }
    };
})();
