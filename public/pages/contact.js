export default function contactMe() {
  let dataBase = firebase.database();

  let messagesRef = dataBase.ref('messages');
  const doc = window.document;
  content.innerHTML = '';
  const title = doc.createElement('h3');
  title.textContent = 'Contact Me';

  const alert = doc.createElement('div');
  alert.className = 'alert';
  alert.textContent = 'Your message has been sent';

  const form = doc.createElement('form');
  form.id = 'contact-form';

  const nameSection = doc.createElement('p');
  const nameElement = doc.createElement('input');
  nameElement.id = 'name';
  nameElement.setAttribute('type', 'text');
  nameElement.setAttribute('placeholder', 'Your Name');
  nameSection.appendChild(nameElement);
  form.appendChild(nameSection);

  const emailSection = doc.createElement('p');
  const emailElement = doc.createElement('input');
  emailElement.id = 'email';
  emailElement.setAttribute('type', 'text');
  emailElement.setAttribute('placeholder', 'Your Email');
  emailSection.appendChild(emailElement);
  form.appendChild(emailSection);

  const messageSection = doc.createElement('p');
  const messageElement = doc.createElement('textarea');
  messageElement.id = 'message';
  messageElement.setAttribute('type', 'text');
  messageElement.setAttribute('placeholder', 'Your Message');
  messageSection.appendChild(messageElement);
  form.appendChild(messageSection);

  const submitSec = doc.createElement('p');
  const submitButton = doc.createElement('input');
  submitButton.className = 'button';
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Send Message');
  submitSec.appendChild(submitButton);
  form.appendChild(submitSec);

  content.appendChild(title);
  content.appendChild(alert);
  content.appendChild(form);

  doc.getElementById('contact-form').addEventListener('submit', submitForm);

  function submitForm(e) {
    e.preventDefault();
    console.log('submit');
    let name = getFormValues('name');
    let email = getFormValues('email');
    let message = getFormValues('message');
    saveMessage(name, email, message);

    doc.querySelector('.alert').style.display = 'block';
    setTimeout(function() {
      doc.querySelector('.alert').style.display = 'none';
    }, 2000);
    form.reset();
  }
  function getFormValues(id) {
    return doc.getElementById(id).value;
  }
  function saveMessage(name, email, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      email: email,
      message: message,
    });
  }
}
