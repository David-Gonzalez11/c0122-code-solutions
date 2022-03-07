/* exported dropRight */
/*
create a new function and give it the parameters of array and count
slice the array and start at 0 of the index and then use a negative index to get the elements of the array before the last count elements
lastly return

*/
function dropRight(array, count) {
  return array.slice(0, -count);
}
