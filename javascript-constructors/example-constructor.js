function ExampleConstructor() {

}
// var example = new ExampleConstructor();

var newFunction = new ExampleConstructor();

console.log('typeof newFunction:', typeof newFunction);
console.log('value of newFunction:', newFunction);

console.log('typeof newFunction.__proto__', typeof newFunction.__proto__);
console.log('typeof newFunction.__proto__', newFunction.__proto__);
console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

console.log('newFunction instanceof:', newFunction instanceof ExampleConstructor);
