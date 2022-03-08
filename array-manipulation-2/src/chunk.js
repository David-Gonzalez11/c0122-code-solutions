/* exported chunk */
/*
create a storage for new values to be passed into
loop through the indexes of array.length witha for loop
increemnt and set the statement equal to size
use the slice method to start the index at a certain point
start at i and assign i to the size parameter and add the value to the storage we created
return the new array

*/
function chunk(array, size) {
  var myArray = [];
  for (var i = 0; i < array.length; i += size) {
    myArray.push(array.slice(i, i + size));
  }
  return myArray;
}
