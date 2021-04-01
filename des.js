// Import file

const bikes = require("./source");

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
var res = groupBy(bikes, "color");
// var res = groupBy(bikes, "price");
// var res = groupBy(bikes, "brand");

console.log("Grouping By Common Property ==>", res);
