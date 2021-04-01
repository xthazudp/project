// Task Part

function resturant(name, cb) {
  console.log("At Resturant");
  console.log("Search for Table.");
  setTimeout(function () {
    cb(null, "ABC Resturant");
    // cb(true);
  }, 3000);
}

function menu(foodItem, cb) {
  console.log("---------------------------");
  console.log("Waiter Brings Menu.");
  console.log("Search For Food Item.");
  setTimeout(function () {
    console.log("Place food order to waiter.");
    cb(null, "momo");
    // cb(true);
  }, 3000);
}

function bill(payment, cb) {
  console.log("---------------------------");
  console.log("Please! Bring our Bill.");
  console.log("Can we make payment through Card");
  setTimeout(function () {
    console.log("Waiter : Yes we do accept Cards.");
    cb(null, "payment");
    // cb(true);
  }, 3000);
}
// Execution Part

resturant("ABC Resturant", function (err, done) {
  if (err) {
    console.log("No Vaccant Table Available.");
  } else {
    console.log("Vaccant Table Found.");

    menu("momo", function (err, done) {
      if (err) {
        console.log("Sorry! We dont have momo right now.");
      } else {
        console.log("Your order be ready soon.");

        bill("payment", function (err, done) {
          if (err) {
            console.log("Sorry! Sir your Card is not working.");
          } else {
            console.log("Payment successful");
            console.log("Thankyou! Sir Keep visiting..");
          }
        });
      }
    });
  }
});
