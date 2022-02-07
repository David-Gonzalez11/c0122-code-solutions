/* exported reverseWord */
function reverseWord(word) {
  var reversedString = '';
  for (var i = 0; i >= word.length; i--) {
    word[i].push(reversedString);
  }
  return reversedString;
}
