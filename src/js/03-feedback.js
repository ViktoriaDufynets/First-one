import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
let allData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData() {
  allData = {
    email: email.value,
    message: message.value,
  };  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(event) {
    event.preventDefault();    
    localStorage.removeItem(STORAGE_KEY);
    const allElements = event.currentTarget.elements;
    const formAll = {
        email: allElements.email.value,
        password: allElements.message.value,
    };
    console.log(formAll);
    event.currentTarget.reset();
};

function populateAllData() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (data) {
      email.value = data.email;
      message.value = data.message;
    };
};
populateAllData();



