// datatype
// 1. primitive datatype
// 2. non primitive datatype
//  a. Array
//  b. Object
//
// var name = 'email'
var phone = 9851016046;
var email = "jskisor@gmail.com";

// var hobbies = 'coding,cycling,testing';

// array

// syntax
// two ways of writing an array
// 1. constructor notation
// var fruits = new Array();
// 2. bracket notation
// var vegitables = [];

var hobbies = ["cycling", "coding", "debugging"];
// array sang sangai aaune kura is INDEX
// index always starts from 0
console.log("hobbies >>", hobbies[8]);
// Array in JS is heterogenous array

var abcd = ["string", 33, null, undefined, true, []];
console.log("heterogenous array >>", abcd);

// Object
// Object is collection of key-value pairs
// name-value, property-value pair

// syntax
// 1. constructor syntax
// var laptop = new Object();
// // 2.bracket notation
// var phone = {};

var student = {
  name: "kishor giri",
  email: "jskisor@Gmail.com",
  phone: 399393,
  hobbies: ["coding", "cycling"],
  name: "broadway",
  phone: 3333333,
  email: "bbbbb",
};

// var kishor;
// name ,email,phone,hobbies are Keys
// kishor giri jskisor....,3949.., array these are values
// var maritalStatus

// accessing value of object
// two ways of accessing value
// 1 dot notation
// bracket notation
// console.log('dot notation ', kishor.xyz)
// console.log('someting is ',maritalStatus)

// TODO bracket notation
console.log("object is >>", student[hobbies]);
// recommended to use bracket notation with references
// change/add object value
// student.name = 'broadway infosys nepal';
// student.address = 'bhaktapur';
console.log("student after change >>", student);

// // remove object with value from object
// delete student.phone;
// console.log('object after remove >>', student)

// symbol
// bigint
