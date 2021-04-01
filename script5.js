// Inbuilt Method //
function calculateTime(timeStamps) {
  var a = timeStamps.split("m");
  var minute = a[0];
  var length = a[1].length;
  var second = a[1].substring(0, length - 1);
  return {
    minute: minute,
    second: second,
  };
}

var result1 = calculateTime("33m2s");
var result2 = calculateTime("3m22s");

console.log("result >>", result1);
console.log("result >>", result2);
