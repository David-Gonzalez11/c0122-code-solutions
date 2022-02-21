/* exported isVowel */
/*
define the function  by giving it a name
-- check each chracter one by one to see if it is equal to a vowel
if it is equal to a vowel return true
otherwise return false
*/
function isVowel(char) {
  return (['a', 'e', 'i', 'o', 'u']).indexOf(char.toLowerCase()) > -1;
}
