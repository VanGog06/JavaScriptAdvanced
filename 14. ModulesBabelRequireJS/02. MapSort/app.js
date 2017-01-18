let mapSort = require('./MapSort');
result.mapSort = mapSort;

let map = new Map();
map.set("Stefan",true);
map.set("Azazel",false);
map.set("Bismoth",false);
map.set("Balrog",true);
map.set("Martel",true);
let sortedMap = result.mapSort(map);
console.log(sortedMap);