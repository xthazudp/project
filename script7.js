// var fruits = [
//   "mango",
//   "apple",
//   "mango",
//   "grape",
//   "banana",
//   "mango",
//   "pineapple",
// ];

// var unique = {};

// function countItem(data) {
//   data.forEach(function (item, index) {
//     unique[item] = (unique[item] || 0) + 1;
//   });
//   return unique;
// }
// var res = countItem(fruits);
// console.log("res >>", res);

////////////////////////////////////////////////

// var fruits = [
//   "mango",
//   "apple",
//   "mango",
//   "grape",
//   "banana",
//   "mango",
//   "pineapple",
//   //   "banana",
// ];

// var unique = [];
// var count = {};
// var comp = [];
// var i = 0;

// function itemCount(data) {
//   data.forEach(function (item, index) {
//     // console.log("data ->", data[index], data);

//     if (!unique.includes(item)) {
//       unique.push(item);
//       count[index] = ++i;
//     } else {
//       count[item] = ++i;
// }
// count[index] = item;
// if (data.includes(item)) {
//   count.push(item, ++i);
// }
// console.log("is >>", data.includes(item));

// count.item = item;
// count[item] = "blue";

// count.push(item);
// count.forEach(function (item, index) {
//   if ((data[item] = count[item])) {
//     i++;
//   } else {
//     ++i;
//   }
// });
//   });
//   return { unique, count };
// }

// var res = itemCount(fruits);
// console.log("res >>", res);

///////////////////////////////////////

var fruits = [
  "mango",
  "apple",
  "mango",
  "grape",
  "banana",
  "mango",
  "pineapple",
];
var unique = [];
var i = 0;
var count = {};

function countItem(data) {
  console.log("Redundent items >>", data);
  data.forEach(function (item, index) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  });
  unique.forEach(function (item, index) {
    if (data.includes(item)) {
      count[item] = ++i;
    }
  });
  return unique;
}

var res = countItem(fruits);
console.log("result ==>", res);

///////////////////////////////////////////////

function getCount(data) {
  // var unique = [];
  var count = {};
  data.forEach(function (item, index) {
    if (count.hasOwnProperty(item)) {
      var b = ++count[item];
    } else {
      var a = (count[item] = 1);
    }
  });
  return count;
}
var result1 = getCount(fruits);
console.log("Items with counts >>", result1);
