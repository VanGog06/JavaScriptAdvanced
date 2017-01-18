function solve(obj, template) {
    let obj = {};

    obj.extend = function(template) {
        for (let key of Object.keys(template)) {
            if (typeof template[key] == 'function') {
                obj.__proto__[key] = template[key];
            } else {
                obj[key] = template[key];
            }
        }
    };

    return obj;
}

var template = {
    extensionMethod: function () {
        console.log("From extension method")
    }
};

solve().extend(template);