/* exported addSuffixToAll */

function addSuffixToAll(words, suffix) {
  var wordsWithSuffix = [];
  for (var i = 0; i < words.length; i++) {
    var updatedWord = words[i] + suffix;
    wordsWithSuffix.push(updatedWord);
  }
  return wordsWithSuffix;
}
