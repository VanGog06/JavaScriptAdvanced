function sortArray(arr, sortMethod) {
    let ascendingOrder = function(a, b) {
        return a - b;
    };

    let descendingOrder = function(a, b) {
        return b - a;
    };

    let sortingStrategies = {
        'asc': ascendingOrder,
        'desc': descendingOrder
    }

    return arr.sort(sortingStrategies[sortMethod]);
}

console.log(sortArray([1, 2, 5, 6, 2, 1], 'asc'));