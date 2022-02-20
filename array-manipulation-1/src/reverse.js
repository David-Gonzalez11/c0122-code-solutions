/* exported reverse */
/*
define the function and it name
-define a new varibale to assign it to the outp
check each word one by one from the last index to the first
push each varibale one by one to new array
-return the varibale that was created in the beginnning
*/
function reverse(array) {
  var arr = [];
  for (var i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}
