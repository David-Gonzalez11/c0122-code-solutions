var div = document.querySelector('.firstdiv');
var body = document.querySelector('#back');
var isBulbOn = false;
function handleClick(event) {
  /* console.log('event was fired'); */
  if (isBulbOn === true) {
    div.className = 'firstdiv';

  } else if (isBulbOn === false) {
    div.className = 'firstdiv off ';
    body.className = '.back';

  }
  isBulbOn = !isBulbOn;
}
div.addEventListener('click', handleClick);
