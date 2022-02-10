/* exported compact */
function compact(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (
      array[i] !== false &&
      array[i] !== null &&
      !Number.isNaN(array[i]) &&
      array[i] !== 0 &&
      array[i] !== undefined &&
      array[i] !== ''
    ) {
      arr.push(array[i]);
    }
  }
  return arr;
}
