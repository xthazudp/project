// Grouping by property using reduce method //
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
    price: 344,
    color: "red",
    cc: 220,
  },
  {
    name: "dominar",
    brand: "bajaj",
    price: 349,
    color: "red",
    cc: 250,
  },
];

function groupBy(sourceArr, property) {
  return sourceArr.reduce(function (acc, item, index, source) {
    var key = item[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});
}

var res = groupBy(bikes, "color");
console.log("Grouping by Property ==>", res);
