/* exported getWords */

/* define the function by giving it a name
--create a storeage for list of words
-- create another storage for the value of current word
--if string is equal to an empty string then return current value of list
--if  string is not equal to a space
--get the string at the current index and set it equal to the current word
-- if string is equal to a space then we push the current word into the list variabe
-- set current word back equal to a empy string
--get the current word and push it into the list of words storage

*/

function getWords(string) {
  var list = [];
  var currentword = '';
  if (string === '') {
    return list;
  }
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentword += string[i];
    } else {
      list.push(currentword);
      currentword = '';
    }
  }
  list.push(currentword);
  return list;
}
