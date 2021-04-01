// // application data ==>
// const name = 'broadway';
// var phone = 333;
// function sayHello() {

// }

// function hi() {
//     // console.log('phone inside ', phone)
//     var email = 'jskisor@gmail.com';
//     const address = 'tinkune';
//     function hello() {

//     }
//     console.log('email inside >>', email)

// }
// hi();
// // console.log('phone outside >>', phone)
// // console.log('email outside >>', email);

// // scope is accessibility of application data

// // three types of scope
// // 1. global scope
// // 2. local(functional) scope
// // 3. block scope

// // global scope
// // all the application data that can be accessed throught the file are global scope
// // all application data declared at outermost layer of a file
// // these are global scope

// // functional scope
// // all the application data declaread and hass accessibility within a function are functional scope

// // block scope

// function test(arg) {
//     // let text = 'welcome';
//     if (arg) {
//         let text = 'something'
//         // block vitra marai text is something
//     } else {
//         let text = 'nothing';
//         // block vitra marai text is nothing

//     }
//     console.log('text is >>', text);
// }

// test(true);

// var address = 'tinkune';
// "use strict"

// function hi() {

//     address = 'bkt';
//     console.log('address inside >>', address);
// }
// hi();

// function sayHello() {

// }

// console.log('address outside >>', address)

// function test(arg) {
//     let name = 'broadway';
//     if (arg) {

//         let name = 'test';
//     }
//     console.log('name is >>',name);
// }

// test(true);
