/* exported todos */

// var todos = [];

// // assinfing previousJSON//
// var previousTodosJSON = localStorage.getItem('javascript-local-storage');

// todos = JSON.parse(previousTodosJSON); // parsing part//

// window.addEventListener('beforeunload', function (event) {
//   // event listener//

//   var todosJSON = JSON.stringify(todos); // stringify part//
//   localStorage.setItem('javascript-local-storage', todosJSON); // storing value part//
// });

var todos = [];
var previousTodosJSON = localStorage.getItem('javascript-local-storage');

if (previousTodosJSON !== null) {
  todos = JSON.parse(previousTodosJSON);
}
window.addEventListener('beforeunload', handlewindows);
function handlewindows(event) {

  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
}
