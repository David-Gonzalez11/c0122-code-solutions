var $type = document.querySelectorAll('span');
var index = 0;
document.addEventListener('keydown', keyDown);

function keyDown(event) {

  if (event.key === $type[index].textContent) {
    $type[index].className = 'correct-char';
    index++;
    $type[index].className = 'underline';
  } else {
    $type[index].className = 'incorrect-char';
  }
}