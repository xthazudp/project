console.log("-------Unique Item-------");

var fruits = ["apple", "mango", "orange", "mango"];

function getUnique(data) {
  return data.reduce(function (acc, item, index, source) {
    if (!acc.includes(item)) {
      acc.push(item);
    }
    return acc;
  }, []);
}
var res = getUnique(fruits);
console.log("Unique item =>", res);

//////////////////////////////////////////////////////////////

console.log("-------Count Item-------");

var fruits = ["apple", "mango", "orange", "mango"];

function getCount(data) {
  return data.reduce(function (acc, item, index, source) {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, {});
}

var res = getCount(fruits);
console.log("Count of item =>", res);
