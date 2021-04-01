// ARRAY //

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
    name: "pulsar",
    brand: "bajaj",
    price: 324,
    color: "red",
    cc: 220,
  },
  {
    name: "himalayan",
    brand: "enfield",
    price: 555,
    color: "black",
    cc: 400,
  },
  // {
  //   name: "hero abc",
  //   brand: "hero",
  //   price: 444,
  //   color: "red",
  //   cc: 100,
  // },
  // {
  //   name: "rtr",
  //   brand: "tvs",
  //   price: 3004,
  //   color: "white",
  //   cc: 200,
  // },
  // {
  //   name: "dominar",
  //   brand: "bajaj",
  //   price: 34,
  //   color: "green",
  //   cc: 400,
  // },
  // {
  //   name: "crf",
  //   brand: "honda",
  //   price: 444,
  //   color: "red",
  //   cc: 190,
  // },
];

// var a = {};

// function groupBy(bikes, property) {
//   bikes.forEach(function (item, index) {
// item.status = "available";
// if (a.hasOwnProperty(item)) {
//   a[item[property]] = item;
// } else {
//   a[item[property]] = item;
// }

// if (bikes[property] === item.property) {
//   a[item[property]] = bikes;
// }
// if (!a.includes(item[property])) {
//   a.push(item);

//   a[item[property]] = item;
// }
// console.log("item -->", item);
// var index = item[property];
// console.log(b.push(item));
// b[item[property]] = item;
// var v = item;
// a[item[property]] = v;
// var b = bikes.filter(function (item, index) {
//   item;
// });
// var b = a[item[property]];
// if (item.hasOwnProperty(b)) {
//   console.log(bikes);
// }
// a[item[property]] = property;

// console.log("item is", item[property]);
// console.log(a);
//   });
//   return a;
// }
// var res = groupBy(bikes, "color");
// console.log(res);
function groupBy(source, propertyName) {
  var res = {};
  console.log("property name ==>", propertyName);
  source.forEach(function (item, index) {
    console.log(" source dot prop ==>", item[propertyName]);

    // console.log("item -->", item);
    // res = item[propertyName];
    // console.log("ano", res);
    // console.log("source-->", res);
    source[item[propertyName]] = item;
  });
  return source;
}
var res = groupBy(bikes, "color");
console.log(res);
