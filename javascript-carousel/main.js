var array = ['images/025.png', 'images/039.png', 'images/007.png', 'images/004.png', 'images/001.png'];
var $img = document.querySelector('img');
var currentIndex = 0;
var $right = document.querySelector('.fa-angle-right');
$right.addEventListener('click', arrowRight);
var $left = document.querySelector('.fa-angle-left');
$left.addEventListener('click', arrowLeft);

function arrowLeft(event) {
  if (currentIndex === 0) {
    currentIndex = array.length - 1;
    $img.setAttribute('src', array[4]);
  } else {
    currentIndex--;
    $img.setAttribute('src', array[currentIndex]);
  }
}

function arrowRight(event) {
  if (currentIndex === array.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
    $img.setAttribute('src', array[currentIndex]);
  }
}

function circle(event) {

  if (event.target.tagName === ('BUTTON')) {
    currentIndex = parseInt(event.target.id);
    $img.setAttribute('src', array[currentIndex]);
  }

}
// setInterval(function () {
//   $img.setAttribute('src', array[currentIndex]);
//   currentIndex++;
//   if (currentIndex === array.length - 1) { currentIndex = 0; }
// }, 3000);
// clearInterval();
// var circles = document.querySelector('I');
// circles.addEventListener('click', event => circle(event));

// setInterval(3000);
