/* exported toObject */
function toObject(keyValuePair) {
  const value = keyValuePair.pop();
  const key = keyValuePair.pop();
  var obj = {};
  obj[key] = value;

  return obj;
}
