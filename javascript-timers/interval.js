
var count = 4;
var countDown;
var countdownDisplay = document.querySelector('.countdown-display');

function countdown() {
  count--;
  if (count > 0) {
    countdownDisplay.textContent = count;

  } else {
    countdownDisplay.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(countDown);
  }
}
countDown = setInterval(countdown, 1000);
