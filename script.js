"use strict";
// Switch //

// const day = "friday";
// const day = "saturday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("It's monday");
//     break;
//   case "tuesday":
//     console.log("It's tuesday");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("It's friday");
//     break;
//   case "friday":
//     console.log("It's Friday");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("It's sunday");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// Function

// sayHello();

// function sayHello() {
//     console.log('hello you are welcome');
// }

/////////////////////////////////////////////////

// function welcome(name) {
//   // parameters
//   // console.log("what  comes in >>", name);
//   // var text = "hi " + name + ", welcome to nodejs";
//   // console.log("text is >>", text);
// }

// welcome("Ram");

///////////////////////////////////////////

// function add(num1, num2) {
//     var res = num1 + num2;
//     console.log('res is >>', res);
// }

// add(33,43);

// function with return type //

// function multiply(num1, num2) {
//   var res = num1 * num2;
//   // to provide result of computation
//   // we should use return keyword
//   return res;
// }

// var result = multiply(3, 4);
// console.log("result >", result);
// console.log("result is >>", multiply(4, 5));

// function goToMarket(amt) {
//   var vegitables = ["tomato"];
//   var fruits = ["apple"];
//   var fish = "fish and something";

// return {
//   vegitables: vegitables,
//   fruits: fruits,
//   fish,
// };

// return {
//   vegitables,
//   fruits,
//   fish,
// };
// }

// var abd = goToMarket();
// console.log("abc id >>", abd);

// IIFE Immidiately invoked functional expression
// syntax
// ()()

// function test() {
//   console.log("i am test");
// }

// // test();

// (function (name) {
//   console.log("i am anynamous function,", name);
//   console.log("i am taking help from IIFE to get executed");
// })({});

/////////////////////////////////////////////////

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

/////////////////////////////////////////////////////////

// Closure //

// function welcome(name) {
//   var text = "Hello!! ";
//   function course(sub) {
//     var display = text + name + " Welcome to " + sub;
//     return display;
//   }
//   return course;
// }

// var result = welcome("RAM")("Mern");
// console.log("res..>>", result);

////////////////////////////////////////////////////////////////

// Destructuring Array

// const resturant = {
//   name: "Classico Italino",
//   location: "Itahari, Nepal",
//   category: ["Italian", "Pizzaria", "Organic", "Vegetarina"],
//   startMenu: ["Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Rissoto"],
// };

// // const arr = [2, 3, 4];
// // const [x, y, z] = arr;
// // console.log(x, y, z);
// // console.log(arr);

// const [first, , second] = resturant.category;
// console.log(first, second);

/////////////////////////////////////////////////////

// CallBack //

// task is to upload video

// prepare a story to upload video
// once completed notify to team members video is uploaded
// optional perform some nonblocking task

// function videoUpload(fName, callback) {
//   console.log("Please! Select the video File to be Uploaded.");
//   setTimeout(function () {
//     console.log("Video is uploaded!!!");
//     callback();
//   }, 4000);
// }

// videoUpload("abc", function () {
//   console.log("Create new folder for moving uploaded video.");
//   console.log("Move the Uploaded video to new folder.");
// });
// console.log("Move the file that already exist in drive.");
// console.log("Delete the file, folder that already exit.");

/////////////////////////////////////////////////////////////////

// Callback Continue //

// Task Part

// function videoUpload(fName, callback) {
//   console.log("Please! Select the video file to be uploaded.");
//   console.log("Video is Uploading.....");
//   setTimeout(function () {
//     // callback(true, "fname"); // for error
//     callback(null, "fname"); // for Success
//   }, 4000);
// }

// // Execution Part
// videoUpload("abc", function (err, done) {
//   if (err) {
//     console.log("No Internet Connection.");
//     console.log("Error uploading file...");
//   } else console.log("Video uploading is successfull.");
// });

// Task Part
function buyTicket(destination, cb) {
  console.log("At online ticket booking app.");
  console.log("----------------------------");
  setTimeout(function () {
    console.log("Ticket Booking Process started!!!");
    // cb(null, "kathmandu");
    cb(true);
  }, 3000);
}

function atAirport(boarding, cb) {
  console.log("----------------------------");
  console.log("At Airport..");
  setTimeout(function () {
    console.log("Performing Security Check.");
    console.log("Boarding Process Started.");
    cb(null, "boarding");
    // cb(true, "boarding");
  }, 3000);
}

function takesOff(insidePlane, cb) {
  console.log("----------------------------");
  console.log("Plane takes off from airport.");
  setTimeout(function () {
    console.log("Airhostess supplies snacks & coffee.");
    cb(null, "insidePlane");
    // cb(true, "insidePlane");
  }, 3000);
}

// Execution Part

buyTicket("Kathmandu", function (err, done) {
  if (err) {
    console.log("Sorry! No Flight Available..");
  } else {
    console.log("Ticket Booked.");

    atAirport("Boarding", function (err, done) {
      if (err) {
        console.log("Flight cancelled due to bad weather.");
      } else {
        console.log("Flight is on time.");

        takesOff("insidePlane", function (err, done) {
          if (err) {
            console.log(
              "Flight has to be rerouted to origin due to malfunction."
            );
          } else {
            console.log("Flight lands on destination at time.");
          }
        });
      }
    });
  }
});
