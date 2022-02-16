/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalizedWord = '';
  for (var i = 0; i < word.length; i++) {
    if (word.toLowerCase() === 'javascript') {
      if (i === 0 || i === 4) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    } else {
      if (i === 0) {
        capitalizedWord += word[i].toUpperCase();
      } else {
        capitalizedWord += word[i].toLowerCase();
      }
    }
  }
  return capitalizedWord;
}
