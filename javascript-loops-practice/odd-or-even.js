/* exported oddOrEven */
function oddOrEven(numbers) {
  var newArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      newArray.push(true);
    } else {
      newArray.push(false);
    }
  }
  return newArray;
}
