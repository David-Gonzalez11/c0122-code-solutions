var student = {
  firstName: 'David',
  lastName: 'gonzalez',
  age: 22
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;

student.previousOccupation = 'Amazon employee';

console.log('value of student.livesInIrvine:', student.livesInIrvine);

console.log('value of student.previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Jeep',
  model: 'Wrangler',
  year: 2021
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

var pet = {
  name: 'Lucky',
  type: 'chihuaha'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
