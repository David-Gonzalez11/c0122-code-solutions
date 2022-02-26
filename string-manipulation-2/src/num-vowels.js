/* exported numVowels */
// function numVowels(string) {
//   var vowel = 0;

//   for (var i = 0; i <= string.length - 1; i++) {
//     if (string.charAt(i) = 'a' || string.charAt(i) = 'e' || string.charAt(i) = 'i' || string.charAt(i) = 'o' || string.charAt(i) ='u') {
//       vowel += 1;
//     }
//   }
//   return vowel;

// }

// for loop over each character
// create logic to know if its a vowel
// check to see if is vowel
// if vowel increment vowel count
// return vowel count at end of for loop

function numVowels(string) {

  var count = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) === 'a' || string.charAt(i) === 'A' || string.charAt(i) === 'e' || string.charAt(i) === 'E' || string.charAt(i) === 'i' ||
                    string.charAt(i) === 'o' || string.charAt(i) === 'u') {
      count++;
    }
  }
  return count;
}
