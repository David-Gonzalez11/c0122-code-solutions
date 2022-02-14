/* exported setValue */
/*
define the function by giving it a namwe
set a new variable which is assigned to an object at a certain key which equals its value
return the variable
*/
function setValue(object, key, value) {
  var OBJ = (object[key] = value);
  return OBJ;
}
