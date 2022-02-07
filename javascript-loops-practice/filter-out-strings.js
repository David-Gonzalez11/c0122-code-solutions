/* exported filterOutStrings */
function filterOutStrings(values) {
  var strings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      strings.push(values[i]);
    }
  }
  return strings;
}
