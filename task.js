// work again on the count task as well as unique using reduce

// var numbers = [3, 5, 6, 6, 7, 7, 7, 3];

// var totalSum = numbers.reduce(function (acc, item, index, source) {
//   console.log("acc is >>", acc);
//   // console.log('item is >>', item);
//   // console.log('index is >>', index);
//   // console.log('source is >>', source);
//   var sum = acc + item;
//   return sum;
// }, 0);
// console.log("total sum >>", totalSum);

///////////////////////////////////////////////////////////////////////

var fruits = ["apple", "mango", "orange", "mango"];

var count = fruits.reduce(function (acc, item, index, source) {
  if (acc.hasOwnProperty(item)) {
    acc[item]++;
  } else {
    acc[item] = 1;
  }
  return acc;
}, {});

console.log("Count of Items ==>", count);

console.log("------------------------------------------------------------");

function getCount(data) {
  return data.reduce(function (acc, item, index, source) {
    if (acc.hasOwnProperty(item)) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;
  }, []);
}

var res = getCount(fruits);
console.log("Count of item =>", res);

/////////////////////////////////////////////////////////////////////

var bikes = [
  {
    name: "xr",
    brand: "honda",
    price: 444,
    color: "red",
    cc: 190,
  },
  {
    name: "fz",
    brand: "yamaha",
    price: 344,
    color: "black",
    cc: 250,
  },
  {
    name: "himalayan",
    brand: "enfield",
    price: 555,
    color: "black",
    cc: 400,
  },
  {
    name: "pulsar",
    brand: "bajaj",
    price: 324,
    color: "red",
    cc: 220,
  },
];

// function groupBy(sourceArr, property) {
//   var res = sourceArr.reduce(function (acc, item, index, source) {
//     var a = item[property];
//     if (!acc[a]) {
//       acc[a] = [];
//     }
//     acc[a].push(item);
//     return acc;
//   }, {});
//   return res;
// }

function groupBy(sourceArr, property) {
  var res = sourceArr.reduce(function (acc, item, index, source) {
    var key = item[property];
    if ((acc[key] = acc[key] || [])) {
      acc[key].push(item);
    }
    return acc;
  }, {});
  return res;
}

var group = groupBy(bikes, "color");
console.log(group);

////////////////////////////////////////////////////////////////////////
