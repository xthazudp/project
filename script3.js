// Nested Promise //

function resturant(name) {
  console.log("At Resturant");
  var xyz = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Search for Table.");
      // resolve("available");
      reject("not available");
    }, 2000);
  });
  return xyz;
}

function menu(foodItem) {
  console.log("Waiter Brings Food Menu.");
  var abc = new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Search For Food Item.");
      // resolve();
      // reject();
    }, 3000);
  });
  return abc;
}

resturant("ABC Resturant")
  .then(function (success) {
    console.log("Free Table Available.");
    return menu("Momo");
  })
  .then(function (success) {
    console.log("Your order will be ready Soon.");
  })
  .catch(function (err) {
    console.log("Error! Output From catch Block.");
  });
