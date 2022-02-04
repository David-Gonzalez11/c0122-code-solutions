/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
isUnderFive(6);

function isEven(number) {
  if ((number % 2) === 0) {
    return true;
  } else {
    return false;
  }
}
isEven(4);

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
isOldEnoughToDrinkAndDrive(23);

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 16 && person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
isOldEnoughToDrink(17);

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else if (pH < 0 || pH > 14) {
    return 'invalid pH level';
  }
}
categorizeAcidity(8);

function introduceWarnerBro(name) {
  if ((name === 'yakko') || (name === 'wakko')) {
    return 'were the warner brothers!';
  } else if (name === 'dot') {
    return 'Im cute';
  } else {
    return 'Goodnight Everybody';
  }
}
introduceWarnerBro('yakko');
