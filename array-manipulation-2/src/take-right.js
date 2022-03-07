/* exported takeRight */
/*
create a function and give it the parameters of array and count '
return the array using the slice method and give it a negative index to start so that it extracts the last two elements in the sequence

*/

function takeRight(array, count) {
  return array.slice(-count);
}
