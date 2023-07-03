
import throttle from 'lodash.throttle';

const formContainer = document.querySelector('.feedback-form');
const emailEl = document.querySelector('input[name="email"]');
const messageEl = document.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const data = {
  email: '',
  message: '',
};

const setData = throttle((localData) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}, 500);

formContainer.addEventListener('input', function(event) {
    data[event.target.name] = event.target.value;
    setData(data);
});

window.addEventListener("load", (event) => {
    const localData = JSON.parse(localStorage.getItem(STORAGE_KEY))
    
    data.email = localData.email;
    data.message = localData.message;
    emailEl.value = localData.email;
    messageEl.value = localData.message;
  });

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    formContainer.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(data)
  })




