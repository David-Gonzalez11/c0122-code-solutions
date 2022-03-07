// /* exported includes */
/*
create a function and give it array and value as its parameters
create a for loop and loop through the arrays length
if the array at certain index is equal to value then return true otherwise return false

*/

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;

}
