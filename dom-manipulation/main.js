var count = 0;
var userClicks = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function button(event) {
  count++;
  clickCount.textContent = 'Clicks: ' + count;
  if (userClicks < 4) {
    return 'cold';
  } else if (userClicks < 7) {
    return 'cool';
  } else if (userClicks < 10) {
    return 'tepid';
  } else if (userClicks < 13) {
    return 'warm';
  } else if (userClicks < 16) {
    return 'hot';
  } else {
    return 'nuclear';
  }

}
userClicks.addEventListener('click', button);
