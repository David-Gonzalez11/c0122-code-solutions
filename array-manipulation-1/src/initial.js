/* exported initial */
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      arr.push(array[i]);
    }
  }
  return arr;
}
