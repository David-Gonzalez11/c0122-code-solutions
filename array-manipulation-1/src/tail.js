/* exported tail */
function tail(array) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (array.length !== array[0]) {
      array.push([arr[i]]);
    }
  }
}
