function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name:', event.target.name);

}

function handleBlur(event) {
  console.log('blur event was fired');
  console.log('event.target.name:', event.target.name);

}

function handleInput(event) {
  console.log('Value of', event.target.name + ':', event.target.value);
}

var control = document.querySelector('#user-name');
var control2 = document.querySelector('#user-email');
var textarea = document.querySelector('#user-message');

control.addEventListener('focus', handleFocus);
control2.addEventListener('focus', handleFocus);
textarea.addEventListener('focus', handleFocus);

control.addEventListener('blur', handleBlur);
control2.addEventListener('blur', handleBlur);
textarea.addEventListener('blur', handleBlur);

control.addEventListener('input', handleInput);
control2.addEventListener('input', handleInput);
textarea.addEventListener('input', handleInput);

var contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var name = contactForm.elements.name.value;
  var email = contactForm.elements.email.value;
  var message = contactForm.elements.message.value;
  var messageData = {
    name: name,
    email: email,
    message: message
  };
  console.log('messageData:', messageData);
  contactForm.reset();
}
contactForm.addEventListener('submit', handleSubmit);
