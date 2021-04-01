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

var groups = {};

function groupBy(data, property) {
  data.forEach(function (item, index) {
    var list = groups[item[property]];
    if (list) {
      list.push(item);
    } else {
      groups[item[property]] = [item];
    }
  });
  return groups;
}
// var res = groupBy(bikes, "color");
// var res = groupBy(bikes, "price");
var res = groupBy(bikes, "brand");

console.log("Grouping By Common Property ==>", res);
