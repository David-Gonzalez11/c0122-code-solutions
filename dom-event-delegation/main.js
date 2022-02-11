var task = document.querySelector('.task-list');

function handleClick(event) {
  console.log('event.target:' + ' ' + event.target.tagName);
  if (event.target.tagName !== ('button')) {
    task.closest('task-list-item');
    console.log('closest:', task);
  }
}
task.addEventListener('click', handleClick);
