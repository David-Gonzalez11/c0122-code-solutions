// query the dome for all span elements //
var type = document.querySelectorAll('span');
// query the dome for all span elements //

function keyDown(event) {

  if (type !== null) {
    type.classList.add('.correct-char');

  } else {
    type.classList.add('.incorrect-char');

  }
}
document.addEventListener('keydown', keyDown);
