/* exported getWords */
function getWords(string) {
  var wordlist = [];
  var currentword = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      currentword += string[i];
    } else {
      wordlist.push(currentword);
      currentword = '';
    }
  }
  wordlist.push(currentword);
  return wordlist;
}
