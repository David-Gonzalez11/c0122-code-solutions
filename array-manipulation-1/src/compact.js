/* exported compact */
/*
define the function by giving it a name
create a storage for new values
check to see if each item is not equal to the value we do not need
check each character and see if they are not equal to the vales we need
add character to new array if it not equal to the value we dont need
return the new array
*/
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
