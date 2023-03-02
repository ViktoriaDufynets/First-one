import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const allData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormData, 500));

function onFormData(event) {
    allData[event.target.name] = event.target.value;
    console.log(allData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allData));
}

function onFormSubmit(event) {
    event.preventDefault();    
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
};

function populateAllData() {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
      email.value = data.email;
      message.value = data.message;
    };
};
populateAllData();


