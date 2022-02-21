/* exported capitalize */

// create sotrage for uppercase word
// get placement of letter at which you want to you capitalize
// make the character you just grabbed and make it capital
// split the words apart to target which chaeacter you need
// retunr the result chracter(capitalized).
function capitalize(word) {
  word = word.split(' ');
  let result = '';

  for (let i = 0; i < word.length; i++) {
    result +=
      word[i].substring(0, 1).toUpperCase() +
      word[i].substring(1).toLowerCase();
  }
  return result;
}
