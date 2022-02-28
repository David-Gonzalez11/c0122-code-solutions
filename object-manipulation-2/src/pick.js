/* exported pick */
/*
create an emypty object
iterate through the keys
if keys includes a certain key and the key i e source is not undefined
set the key to the new object
return the new object
*/
function pick(source, keys) {
  var Obj = {};
  for (var key in source) {
    if ((keys.includes(key)) &&
    (source[key] !== undefined)) {
      Obj[key] = source[key];
    }
  }
  return Obj;
}
