/* exported initial */
/*
create a storage for new characters
check to see if each character is not the last of the array
if it is not the last chracter then add to the new array
return new array
*/
function initial(array) {
  var arr = [];
  for (var i = 0; i < array.length - 1; i++) {
    arr.push(array[i]);
  }
  return arr;
}
