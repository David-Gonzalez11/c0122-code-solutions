/* exported capitalize */

// create sotrage for uppercase word
// get placement of letter at which you want to you capitalize
// make the character you just grabbed and make it capital
// split the words apart to target which chaeacter you need
// retunr the result chracter(capitalized).
function capitalize(word) {
  var arr = word.toLowerCase().split(' ');

  var result = arr.map(function (val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });
  return result.join(' ');
}
