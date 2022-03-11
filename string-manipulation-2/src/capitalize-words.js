/* exported capitalizeWords */

function capitalizeWords(string) {
  // create array with each word seperated
  var words = string.split(' ');
  // create empty array to save the new capitalized words
  var capitalizedWordArray = [];
  // loop over each word
  for (var i = 0; i < words.length; i++) {
    // create variable to save capitalized word
    var capitalizedWord = '';
    // loop over characters of the current word
    for (var x = 0; x < words[i].length; x++) {
      // if first letter, capitalize
      if (x === 0) {
        capitalizedWord += words[i][x].toUpperCase();
        // if any other letter, lowercase
      } else {
        capitalizedWord += words[i][x].toLowerCase();
      }
    }
    // add the new capitalized word to the capitalized words array
    capitalizedWordArray.push(capitalizedWord);
  }
  // join the capitalized words array so they are a string with spaces again
  return capitalizedWordArray.join(' ');
}
