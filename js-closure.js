// closure is an inner function which has access to
// 1. global scope
// 2. parent function arugment
// 3. parent function scope
// 4. own argument and scope

// var text = 'welcome';
// function welcome(name) {
//     var to = ' to ';
//     function address(location) {
//         // address is closure
//         var greetingText = 'hi ' + name + ' ' + text + to + location
//         console.log('greeting text >>', greetingText);
//         function sayHello() {
//             var xyz = 'xz';
//         }
//     }
//     address('pokhara')
// }

// welcome('dinesh');

function addition(num1) {
  var a = function () {};
  function inner(num2) {
    var res = num1 + num2;
    console.log("res >>", res);
    return res;
  }
  // inner(5);

  return inner;
}

var result = addition(4)(5);
console.log("result >>", result);
