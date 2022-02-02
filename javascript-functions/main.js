function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsresult = convertMinutesToSeconds(5);
console.log('value of convertMinutesToSecondsResult:', convertMinutesToSecondsresult);

function greet(name) {
  var greeting = 'Hey ' + name;
  return greeting;
}
var greetResult = greet('Beavis');
console.log('value of greetResult:', greetResult);
greet();

function getArea(width, height) {
  var area = width * height;
  return area;
}
var areaResult = getArea(17, 42);
console.log('value of areaResult:', areaResult);
getArea(17, 42);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}
var firstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamprouge' });
console.log('value of getFirstName result:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult of the array:', getLastElementResult);
