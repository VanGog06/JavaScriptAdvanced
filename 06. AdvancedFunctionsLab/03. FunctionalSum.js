let f = (function() {
    let sum = 0;

    return function add(value) {
        sum += value;
        add.toString = () => sum;
        return add;
    }
})();

console.log(f(3)(2));