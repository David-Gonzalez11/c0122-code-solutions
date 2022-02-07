/* exported filterOutNulls */
function filterOutNulls(values) {
  var notANull = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      notANull.push(values[i]);
    }
  }
  return notANull;
}
