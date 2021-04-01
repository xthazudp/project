// TASK 1 //
console.log("----------------TASK 1-------------------");

var fruits = [
  "mango",
  "apple",
  "mango",
  "grape",
  "banana",
  "mango",
  "pineapple",
  "banana",
  "orange",
];

var length = fruits.length;
console.log("Last item of an arry is >>>", fruits[length - 1]);

// task 2
// Write a function to find unique array's of elements from given array
// expected output
// var res = getUnique(fruits);
// res should be unique array
console.log("----------------TASK 2-------------------");

var unique = [];

function getUnique(data) {
  console.log("Redundent items >>", data);
  data.forEach(function (item, index) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  return unique;
}

var result = getUnique(fruits);
console.log("unique items >>", result);

// task 3
// write a function to find the number of occurance of item from given array
// result should be in object
// expected output
// var count = {
//     apple: 4,
//     mango: 5,
//     grape: 4
//     ...
// }

// function getCount(data) {
//   var count = {};
//   data.forEach(function (item, index) {
//     count[item] = (count[item] || 0) + 1;
//     // count[item] = item;
//     // count[item] = 1;
//   });
//   return count;
// }
console.log("----------------TASK 3-------------------");
function getCount(data) {
  var count = {};
  data.forEach(function (item, index) {
    if (count.hasOwnProperty(item)) {
      count[item]++;
    } else {
      count[item] = 1;
    }
  });
  return count;
}
var result1 = getCount(fruits);
console.log("Items with counts >>", result1);
