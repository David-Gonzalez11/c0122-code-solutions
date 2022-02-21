/* exported reverseWord */
/*
define the function anf its name
set the varibale equal to an empty string
look at each character one at a time
add word at specific character to the newString variable
return the new string
*/

function reverseWord(word) {
  var newString = '';
  for (var i = word.length - 1; i >= 0; i--) {
    newString += word[i];
  }
  return newString;
}
