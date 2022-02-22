function ExampleConstructor() {

}
// var example = new ExampleConstructor();

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);
var newFunction = new ExampleConstructor();
console.log('value of new function:', newFunction);
var instance = (newFunction instanceof ExampleConstructor);
console.log(instance);

// type of example.__proto__//
