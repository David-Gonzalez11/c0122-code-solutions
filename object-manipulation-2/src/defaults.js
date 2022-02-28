/* exported defaults */
/* iterate over the keys in source
if target is not equal to undefined then
the key at source is equal to the target object

*/

function defaults(target, source) {
  for (var key in source) {
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
