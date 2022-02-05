/* exported findIndex */
function findIndex(array, value) {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] === value) {
      return array[0];
    }
  }
  return -1;
}
