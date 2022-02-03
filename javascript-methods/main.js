var number = 1;
var num2 = 2;
var num3 = 3;

var maximumValue = Math.max((number, num2, num3));

console.log('value of maximumValue:', maximumValue);

var heroes = ['batman', 'superman', 'iron man', 'venom'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor((randomNumber));
console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);
var library = [
  {
    title: 'Harry potter',
    author: 'jk rowling'

  },

  {
    title: 'cars',
    author: 'mechanic'
  },
  {
    title: 'journey',
    author: 'david'
  }
];

var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};

var css = {
  title: 'CSS secrets',
  author: 'Lea Verou'
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('value of the library array:', library);

var FullName = 'David Gonzalez';

var firstAndLastName = FullName.split((' '));

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
