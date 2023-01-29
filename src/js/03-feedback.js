import throttle from 'lodash.throttle';

const KEY_LOCALSTORAGE = 'feedback-form-state';

const formObject = {
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
  form: document.querySelector('form'),
};

const params = {};

formObject.form.addEventListener('input', throttle(onFormInput, 500));

formObject.form.addEventListener('submit', submitForm);

function onFormInput(event) {
  const key = event.target.name;
  params[key] = event.target.value;
  localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(params));
}

function submitForm() {
  event.preventDefault();
  console.log(params);
  formObject.form.reset();
  localStorage.removeItem(KEY_LOCALSTORAGE);
}
function controlData() {
  const data = localStorage.getItem(KEY_LOCALSTORAGE);
  const parseData = JSON.parse(data);

  if (parseData.email) {
    formObject.email.value = parseData.email;
  }
  if (parseData.message) {
    formObject.message.value = parseData.message;
  }
}
controlData();
