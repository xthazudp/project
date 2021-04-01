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
];

var b = {};
// loop
bikes.forEach(function (item, index) {
  //   console.log("item-->", item);
  //   b[item.color] = [item];
  //   console.log("color", b);
  b = item;
  console.log(b);
  //   if (b === item.color) {
  //     console.log((a = item));

  // a.push(item);
  //   }
  //   return b;
});
