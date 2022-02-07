console.log('hello, world');
document.querySelector('h1');

console.log(document.querySelector('h1'));

console.dir(document.querySelector('h1'));

document.querySelector('#explanation');
console.dir(document.querySelector('#explanation'));

document.querySelector('p.hint');
console.log('query selector with hint class:', document.querySelector('p.hint'));
console.dir('p.hint');

document.querySelectorAll('p');
console.log('selector for p elements:', document.querySelectorAll('p'));

document.querySelectorAll('#example-link');
console.log('selector for example link class:', document.querySelectorAll('#example-link'));
