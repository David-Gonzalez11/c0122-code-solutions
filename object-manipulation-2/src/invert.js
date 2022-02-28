/* exported invert */
/* set a new empty object literal
iterate over the key
if there is a source property it should be set to the new object
return the new object

*/

function invert(source) {
  var obj = {};
  for (var key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
