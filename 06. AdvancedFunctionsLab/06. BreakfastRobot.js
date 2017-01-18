let robot = (function () {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        coke: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
    };

    function restock(microelement, quantity) {
        ingredients[microelement] += Number(quantity);
        return "Success";
    }

    function prepare(microelement, quantity) {
        for (let key of Object.keys(recipes[microelement])) {
            let neededQuantity = recipes[microelement][key] * quantity;
            let availableQuantity = ingredients[key];

            if (availableQuantity < neededQuantity) {
                return `Error: not enough ${key} in stock`;
            }
        }

        for (let key of Object.keys(recipes[microelement])) {
            ingredients[key] -= recipes[microelement][key] * Number(quantity);
        }

        return 'Success';
    }

    function report() {
        return [...Object.keys(ingredients)]
            .map(e => e + '=' + ingredients[e])
            .join(' ');
    }

    return function commandProcessor(command) {
        let [currentCommand, name, quantity] = command.split(' ');
        quantity = Number(quantity);
        switch (currentCommand) {
            case 'restock':
                return restock(name, quantity);
                break;
            case 'prepare':
                return prepare(name, quantity);
                break;
            case 'report':
                return report();
                break;
        }
    }
})();

/*let robot = (function () {
 let resources = {protein: 0, carbohydrate: 0, fat: 0, flavour: 0};
 let recipes = {
 apple: {carbohydrate: 1, flavour: 2},
 coke: {carbohydrate: 10, flavour: 20},
 burger: {carbohydrate: 5, fat: 7, flavour: 3},
 omelet: {protein: 5, fat: 1, flavour: 1},
 cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10}
 };

 function restock(element, quantity) {
 resources[element] += Number(quantity);
 return 'Success';
 }

 function prepare(recipe, quantity) {
 for (let element of Object.keys(recipes[recipe])) {
 let totalQuantity = recipes[recipe][element] * quantity;
 if (resources[element] < totalQuantity) {
 return `Error: not enough ${element} in stock`;
 }
 }

 for (let element of Object.keys(recipes[recipe])) {
 resources[element] -= recipes[recipe][element] * Number(quantity);
 }

 return 'Success';
 }

 function report() {
 return [...Object.keys(resources)]
 .map(e => e + '=' + resources[e])
 .join(' ');
 }

 return function commandProcessor(input) {
 let tokens = input.split(/ /);
 let commandName = tokens.shift();
 let args = tokens;
 switch (commandName) {
 case 'prepare':
 return prepare(...args);
 break;
 case 'restock':
 return restock(...args);
 break;
 default:
 return report();
 break;
 }
 }
 })();*/


/*console.log(robot(
 [['prepare cheverme 1'],
 ['restock protein 10'],
 ['report'],
 ['prepare cheverme 1'],
 ['restock carbohydrate 10'],
 ['prepare cheverme 1'],
 ['restock fat 10'],
 ['prepare cheverme 1'],
 ['restock flavour 10'],
 ['prepare cheverme 1'],
 ['report']
 ]
 ));*/

console.log(robot('prepare cheverme 1'));
 console.log(robot('restock protein 10'));
 console.log(robot('prepare cheverme 1'));
 console.log(robot('restock carbohydrate 10'));
 console.log(robot('prepare cheverme 1'));
 console.log(robot('restock fat 10'));
 console.log(robot('prepare cheverme 1'));
 console.log(robot('restock flavour 10'));
 console.log(robot('prepare cheverme 1'));
 console.log(robot('report'));

console.log(robot('restock carbohydrate 10'));
console.log(robot('restock flavour 10'));
console.log(robot('prepare apple 1'));
console.log(robot('restock fat 10'));
console.log(robot('prepare burger 1'));
console.log(robot('report'));
