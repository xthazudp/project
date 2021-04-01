var cars = [
  {
    make: "audi",
    model: "r8",
    year: "2012",
    color: "red",
  },
  {
    make: "audi",
    model: "rs5",
    year: "2013",
    color: "black",
  },
  {
    make: "ford",
    model: "mustang",
    year: "2012",
    color: "red",
  },
  {
    make: "ford",
    model: "fusion",
    year: "2015",
    color: "green",
  },
  {
    make: "kia",
    model: "optima",
    year: "2012",
    color: "black",
  },
];

Array.prototype.groupBy = function (prop) {
  return this.reduce(function (groups, item) {
    const val = item[prop];
    // console.log(val);
    // console.log(groups[val]);
    // groups[val] = groups[val] || [];
    groups[val] = groups[val] || [];

    groups[val].push(item);
    return groups;
  }, {});
};

// initiate your groupBy. Notice the recordset Cars and the field Make....
// const groupByMake = cars.groupBy("color");
const groupByMake = cars.groupBy("color");

console.log(groupByMake);

//At this point we have objects. You can use Object.keys to return an array
// function groupBy(list, keyGetter) {
//   const map = new Map();
//   list.forEach((item) => {
//     const key = keyGetter(item);
//     const collection = map.get(key);
//     if (!collection) {
//       map.set(key, [item]);
//     } else {
//       collection.push(item);
//     }
//   });
//   return map;
// }

// // example usage

// const pets = [
//   { type: "Dog", name: "Spot" },
//   { type: "Cat", name: "Tiger" },
//   { type: "Dog", name: "Rover" },
//   { type: "Cat", name: "Leo" },
// ];

// const grouped = groupBy(pets, (pet) => pet.type);

// console.log(grouped.get("Dog")); // -> [{type:"Dog", name:"Spot"}, {type:"Dog", name:"Rover"}]
// // console.log(grouped.get("Cat")); // -> [{type:"Cat", name:"Tiger"}, {type:"Cat", name:"Leo"}]
