var div = document.querySelector('.firstdiv');
var isBulbOn = false;
function handleClick(event) {
  /* console.log('event was fired'); */
  if (isBulbOn === true) {
    div.className = 'firstdiv';
  } else if (isBulbOn === false) {
    div.className = 'firstdiv off ';
  }
  isBulbOn = !isBulbOn;
}
div.addEventListener('click', handleClick);
