/* exported omit */
/*
create a new object
iterate over the source propereties
check to seee that there are properties that are not listed in keys
if the key includes keys then it should not be added to the new object
set the source key to the new object
return the new Objectt
*/

function omit(source, keys) {
  var Obj = {};
  for (var key in source) {
    if ((!keys.includes(key)) &&
    (source[key] !== undefined)) {
      Obj[key] = source[key];
    }
  }
  return Obj;
}
