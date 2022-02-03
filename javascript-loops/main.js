/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;

  while (currentNumber < 11) {
    numbers.push((currentNumber));
    currentNumber++;
  }
  console.log('getNumbersToTen:', numbers);
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber < 22) {
    evenNumbers.push((currentNumber));
    currentNumber += 2;
  }
  console.log('getEvenNumbersTwenty:', evenNumbers);
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  console.log('repeatedWord:', repeated);
  return repeated;
}
repeatWord('hello', 5);

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log('logEachCharacter:', string);
  }
  console.log(string[i]);
}
logEachCharacter('David');

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    numbers[i].push(doubled);
  }
  console.log(numbers[i]);
  numbers.push((doubled));
  return doubled;
}
