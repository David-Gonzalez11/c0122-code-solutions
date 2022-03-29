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
var btn = document.getElementsByTagName('BUTTON');
function circles(event) {
  const activeIndex = event.target.dataset.index;
  currentIndex = activeIndex;
  $img.setAttribute('src', array[activeIndex]);
  btn[currentIndex].classList.add('black');
  btn[currentIndex - 1].classList.remove('black');
}

var dots = document.querySelector('.dots');
dots.addEventListener('click', circles);

setInterval(function () {
  $img.setAttribute('src', array[currentIndex]);
  currentIndex++;
  if (currentIndex === array.length - 1) { currentIndex = 0; }
}, 3000);
clearInterval();
