var address = "tinkune"; //original

var address1 = address; //reference

// address = 'bhaktapur';
address1 = "lalitpur";

console.log("address >>", address);
console.log("address 1 >>", address1);

// immutable behaviour ==> if changed in original it is not reflected in reference and vice versa
// primitive data type  are immutable

var stu = {
  name: "broadway",
  house: "red",
  roll_no: 3,
};

var stu1 = stu;

// stu.name = 'infosys';
stu1.class = 5;

console.log("stu is >>", stu);
console.log("stu1 is >>", stu1);

// if changed in original it is reflected in reference
// if changed in reference it is reflected in original
// mutable behaviour
// array and objects are mutable data type

var data = {
  from: "kishor giri",
  to: "broadway infosys nepal",
  message: "hi and hello",
};

var data1 = {
  from: "kishor giri",
  to: "rose@Gmail.com",
  message: "hi and hello",
};

function sendMail(arg) {
  arg.message = "forgotpassword";
  arg.subject = "something new";
  arg.to = "hi";
}

sendMail(data);
console.log("data is >>", data);
