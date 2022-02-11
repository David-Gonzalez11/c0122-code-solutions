var tabcontainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabcontainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs.className = 'active';
      } else {
        tabs.className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < views.length; x++) {
      if (views[x].getAttribute('data-view') === dataView) {
        views[x].className = ('class', 'view');
      } else {
        views[x].className = ('class', 'view hidden');
      }
    }
  }
}
