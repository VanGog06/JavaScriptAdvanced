function addSubtractModule() {
    let value = 0;
    return {
        add: function(num) {
            return value += Number(num);
        },
        subtract: function(num) {
            return value -= Number(num);
        },
        get: function() {
            return value;
        }
    }
}

module.exports = {addSubtractModule};