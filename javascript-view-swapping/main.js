var tabcontainer = document.querySelector('.tab-container');
var tab = document.querySelector('.tab');
var view = document.querySelector('view');

tabcontainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tab.length; i++) {
      if (tab[i] === event.target) {
        tab.className = 'active';
      } else {
        tab.className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < view.length; x++) {
      if (view[x].getAttribute('data-view') === dataView) {
        view[x].className = ('class', 'view');
      } else {
        view[x].className = ('class', 'view hidden');
      }
    }
  }
}
