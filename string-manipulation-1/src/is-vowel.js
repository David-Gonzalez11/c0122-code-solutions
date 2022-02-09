/* exported isVowel */
/*
define the function  by giving it a name
-- check each chracter one by one to see if it is equal to a vowel
if it is equal to a vowel return true
otherwise return false
*/
function isVowel(char) {
  if (char === 'A' || char === 'a' || char === 'E' || char === 'e' || char === 'I' || char === 'i' || char === 'O' || char === 'o' || char === 'U' || char === 'u') {
    return true;

  } else {
    return false;
  }
}
