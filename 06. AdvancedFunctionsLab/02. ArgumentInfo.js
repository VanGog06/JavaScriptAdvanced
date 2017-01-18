function argumentInfo() {
    let argumentAppearence = new Map();

    for (let argument of arguments) {
        console.log(typeof(argument) + ": " + argument);

        if (!argumentAppearence.has(typeof(argument))) {
            argumentAppearence.set(typeof(argument), 1);
        } else {
            argumentAppearence.set(typeof(argument), argumentAppearence.get(typeof(argument)) + 1);
        }
    }

    let keys = argumentAppearence.keys();
    keys = [...keys].sort((a, b) => argumentAppearence.get(b) - argumentAppearence.get(a));

    for (let key of keys) {
        console.log(key + ' = ' + argumentAppearence.get(key));
    }
}

argumentInfo('cat', 'cat', 42, 42, function () { console.log('Hello world!'); });