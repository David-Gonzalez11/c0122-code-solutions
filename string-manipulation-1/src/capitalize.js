/* exported capitalize */

// create sotrage for uppercase word
// get placement of letter at which you want to you capitalize
// make the character you just grabbed and make it capital
// split the words apart to target which chaeacter you need
// retunr the result chracter(capitalized).
function capitalize(word) {
  var capital = word.charAt(0).toUpperCase() + word.slice(1);
  return capital;
}
