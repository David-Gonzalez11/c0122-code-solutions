/* exported ransomCase */
function ransomCase(string) {
  var char = string.toLowerCase().split('');
  for (var i = 0; i < char.length; i += 2) {
    char[i] = char[i].toUpperCase();
  }
  return char.join('');
}
