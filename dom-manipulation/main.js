var count = 0;
var colorButton = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

function button(event) {
  count++;
  clickCount.textContent = 'Clicks: ' + count;
  if (count < 4) {
    colorButton.className = 'hot-button cold';
  } else if (count < 7) {
    colorButton.className = 'hot-button cool';
  } else if (count < 10) {
    colorButton.className = 'hot-button tepid';
  } else if (count < 13) {
    colorButton.className = 'hot-button warm';
  } else if (count < 16) {
    colorButton.className = 'hot-button hot';
  } else {
    colorButton.className = 'hot-button nuclear';
  }
}
colorButton.addEventListener('click', button);
