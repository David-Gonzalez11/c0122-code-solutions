var tabcontainer = document.querySelector('.tab-container');
var tabs = document.querySelectorAll('.tab');
var views = document.querySelectorAll('.view');

tabcontainer.addEventListener('click', handleClick);

function handleClick(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i] === event.target) {
        tabs[i].className = 'tab active';
      } else {
        tabs[i].className = 'tab';
      }
    }
    var dataView = event.target.getAttribute('data-view');
    for (var x = 0; x < views.length; x++) {
      if (views[x].getAttribute('data-view') !== dataView) {
        views[x].className = 'view hidden';
      } else {
        views[x].className = 'view';
      }
    }
  }
}
