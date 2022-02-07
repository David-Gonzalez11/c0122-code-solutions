/* exported initial */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    array.filter([0]);
    if (array[i] !== 0) {
      array.push(arr[i]);
    }
  }
}
