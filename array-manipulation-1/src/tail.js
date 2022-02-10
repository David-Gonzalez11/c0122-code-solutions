/* exported tail */
/*
define a new function by giving it a name
create a storage for new elemnts of the array after the first
check to see if array is equal to an empty array
return empty array

check to see if each word at the current place is equal to a place that is not the first
if it is not the firs then add it to the new storage
return back the new array

*/
function tail(array) {
  var arr = [];
  if (array === []) {
    return arr;
  }
  for (var i = 0; i < array.length; i++) {
    if (i > 0) {
      arr.push(array[i]);
    }
  }
  return arr;
}
