/* exported isUpperCased */

/*
define the function name
- check to see if the current word is uppercase
if it is uppercase then return true
otherwise return false
*/
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
