// Nested Promise //

console.log("I want to have a driving license.");
console.log("-------------------------------------");

function register(amt) {
  console.log("Register for the license exam.");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("success");
      //   reject("Failure");
    }, 3000);
  });
}
function writtenExam(wExam) {
  console.log("At written exam center for driving license.");
  return new Promise(function (resolve, reject) {
    console.log("Examination is Started.");
    setTimeout(function () {
      console.log("Written Exam Result Published.");
      resolve("success");
      //   reject("Failure");
    }, 3000);
  });
}

function trialExam(tExam) {
  console.log("At Trail Center");
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Trail Result Published.");
      resolve("success");
      //   reject("Failure");
    }, 3000);
  });
}

register(1000)
  .then(function (success) {
    console.log("Your form is registered. Now get ready for written exam.");
    console.log("-------------------------------------");

    return writtenExam("result");
  })
  .then(function (success) {
    console.log("Congrats! You have passed written exam.");
    console.log("You are now eligible for trial exam.");
    console.log("-------------------------------------");

    return trialExam("result");
  })
  .then(function (success) {
    console.log("Congrats! You have passed Trial exam.");
    console.log("You can now collect your license from office.");
    console.log("-------------------------------------");
  })
  .catch(function (err) {
    console.log("-------------------------------------");
    console.log("Sorry! Try Again later.");
  });
