// function buyPhone(model) {
//     // at phone shop
//     console.log('at phone shop');
//     console.log('shopkeeper told me to come again at evening');
//     setTimeout(function () {
//         console.log('phone arrived at shop');
//         return model;

//     }, 2000);
// }
// //$#############################################################

// console.log('i want to get a phone');
// var res = buyPhone('s10');
// console.log(' i have a phone', res)
// console.log('now take photo');

// callback

// callback is a function which is passed as an argument to another function
// callback are used to handle result of async call

// function test(arg) { // place holder
//     // check what comes in

// }
// // HOF--> function that accepts function as an argument

// test(function () {
//     // this function is callback
// })

// function buyPhone(model, cb) {
//     // story
//     console.log('i am at phone shop and shopkeeper told me to wait');

//     setTimeout(function () {
//         console.log('phone arrived at shop');
//         console.log('now callback');
//         cb();
//     }, 4000);
// }

// console.log('start execution');
// buyPhone('s10', function () {
//     console.log('this is result of buyphone');
//     console.log('blocking task goes here');
//     console.log('take photo,call friends, surf internet');
// })
// console.log('non blocking task');
// console.log('go for ride');
// console.log('eat something')

// task part
function askMoney(amt, callback) {
  console.log(
    "i asked money with mom and she told me to wait till she gets her salary"
  );
  setTimeout(function () {
    console.log("mom gets her salary");
    callback();
  }, 3000);
}

// execution
askMoney(4999, function () {
  console.log("result of ask money");
  console.log("blocing task");
});
console.log("go to college");
console.log("take a bath");

// sendMail(data,function(){
//         console.log('result of send mail');
// })

// send_notification(data,function(){

// })

// task is to upload video

// prepare a story to upload video once completed notify to team members video is uploaded
// optional perform some nonblocking task
