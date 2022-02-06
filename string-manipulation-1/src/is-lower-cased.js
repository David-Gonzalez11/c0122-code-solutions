/* exported isLowerCased */

/* function to determine if string is a lower cased word //
-create a statment to check if word is equal to lowercase word-
get result and determine if it is true or not
- otherwise the output will be false
*/

function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
