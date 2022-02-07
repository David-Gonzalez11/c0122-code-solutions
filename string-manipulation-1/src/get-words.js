/* exported getWords */
function getWords(string) {
  var list = [];
  var currentword = '';
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
