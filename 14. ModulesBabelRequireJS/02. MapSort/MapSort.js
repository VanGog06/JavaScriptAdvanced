function mapSort(map, sortFn) {
    if (sortFn == undefined) {
        sortFn = (a, b) => a[0].toString().localeCompare(b[0].toString());
    }

    let newMap = new Map();

    [...map]
        .sort(sortFn)
        .forEach(entry => newMap.set(entry[0], entry[1]));

    return newMap;
}

module.exports = mapSort;

