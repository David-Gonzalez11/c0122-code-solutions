// var array = ['images/025.png', 'images/039.png', 'images/007.png', 'images/004.png', 'images/001.png'];
// var $img = document.querySelector('img');
// var currentIndex = 0;
// var $right = document.querySelector('.fa-angle-right');
// $right.addEventListener('onclick:', arrowRight);
// var $left = document.querySelector('.fa-angle-left');
// $left.addEventListener('click', arrowLeft);

// function arrowLeft(event) {
//   if (currentIndex === 0) {
//     currentIndex = array.length - 1;
//     $img.setAttribute('src', array[4]);
//   } else if (event.target === $left) {
//     currentIndex--;
//     $img.setAttribute('src', array[currentIndex]);
//     console.log('i was clicked');
//   }
// }

// function arrowRight(event) {
//   if (currentIndex === array.length) {
//     currentIndex = 0;
//     $img.setAttribute('src', array[0]);
//   } else if (event.target === $right) {
//     currentIndex++;
//     $img.setAttribute('src', array[currentIndex]);
//     console.log('i was clicked');

//   }
// }

// function circle(event) {

// }
// var circles = document.querySelector('.circles');
// circles.addEventListener('click', circle);
// console.log(circles);

// var left = document.querySelector('i');
// left.addEventListener('click', arrowRight);

// // we know both the arrows work on click

// // target the arrrows to chnage through the images and indexes as each button is clicked
// // when the button on the right is clicked increement the current variables to be able tp display the next image at cettain index
// // when the button on th left is clicked decrement the current variable to be abkle to display the next image at the index before
// // add a query selector for all of the circles when they are clicked
// // when the right button matches the index at which it was clickjed then show that image
