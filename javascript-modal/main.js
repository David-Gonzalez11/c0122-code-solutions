var overlay = document.querySelector('#overlay');

document.querySelector('#show-modal-btn').addEventListener('click', function () {
  overlay.style.display = 'block';
});

document.querySelector('#close-modal-btn').addEventListener('click', function () {
  overlay.style.display = 'none';
});
