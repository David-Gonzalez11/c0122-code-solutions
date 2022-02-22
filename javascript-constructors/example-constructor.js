function ExampleConstructor() {

}
// var example = new ExampleConstructor();

var newFunction = new ExampleConstructor();

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

console.log('typeof example.__proto__', typeof newFunction.__proto__);
console.log('typeof example.__proto__', newFunction.__proto__);

console.log('value of new function:', newFunction);
var instance = (newFunction instanceof ExampleConstructor);
console.log(instance);

// type of example.__proto__//
/// fix this//
