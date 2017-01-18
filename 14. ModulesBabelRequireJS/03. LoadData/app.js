let data = require('./LoadData');

function sort(property) {
    return [...data].sort((a, b) => a[property].toString().localeCompare(b[property].toString()));
}

function filter(property, value) {
    return [...data].filter(a => a[property] === value);
}

result.sort = sort;
result.filter = filter;