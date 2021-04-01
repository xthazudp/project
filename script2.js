// Promise Examples //

function resturant(name) {
  console.log("At Resturant");
  console.log("Search For Table.");
  var xyz = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("available");
      // reject("not available");
    }, 2000);
  });

  return xyz;
}

resturant("ABC Resturant")
  .then(function (success) {
    console.log("Vaccant Table Found.");
  })
  .catch(function (err) {
    console.log("No Vaccant table Available.");
  });
console.log("Make a Phone Call.");

/* function phoneCall(num) {
  console.log("Dial Number...");
  var xyz = new Promise(function (resolve, reject) {
    setTimeout(function () {
      // resolve("connected");
      reject("busy");
    }, 2000);
  });
  return xyz;
}

phoneCall(987654321)
  .then(function (success) {
    console.log("Phone connected.", success);
  })
  .catch(function (err) {
    console.log("Phone not connected.");
  })
  .finally(function () {
    console.log("Make a new call again.");
  });
 */
