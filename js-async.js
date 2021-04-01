// synchronous and asynchronous

// sync

// step 1
// step 2 ==> result waiting of step 1
// step 3
// step 4

// step n ==> step n-1 must be ready

// db_connect();
// data_validation();
// db_insert();
// send_notification();

// advantanges
// easy to implement logic
// redable code base

// disadvantages
// slow execution

// task ==> blocking task , non blocking task

//async

// step 1
// step 2 non result waiting
// step 3
// step 4
// step 5

// step n == step n-1 ko result parkhinu pardaina

// advantages
// fast execution

// disadvantages
// slightly unreadble codebase
// slightly difficult in implementing logic

// eg.
// db_connect();
// data_validation();
// db_insert();
// send_notification();

// challanges
// result handling

// inbuilt method
//delay
// setTimeout(function () {
//     // delay block
// }, 2000);

console.log("step 1");
console.log("step 2");
console.log("step 3");
setTimeout(function () {
  console.log("step 4");
}, 2000);
console.log("step 5");
console.log("step 6");
