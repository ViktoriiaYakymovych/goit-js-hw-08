import "../css/common.css";
import "../css/03-feedback.css";

import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const CURRENT_KEY = "feedback-form-state";

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onClearForm);
onUpdateform();

function onFormInput () {
    const formObj = {};
    
    new FormData(form).forEach((value, name) => {
        formObj[name] = value;
    });

    localStorage.setItem(CURRENT_KEY, JSON.stringify(formObj));
};


function onClearForm (e) {
    e.preventDefault();
    console.log(localStorage.getItem(CURRENT_KEY));
    localStorage.removeItem(CURRENT_KEY);
    form.reset();
};

function onUpdateform () {
    if (localStorage.getItem(CURRENT_KEY)) {
        const { email, message } = JSON.parse(localStorage.getItem(CURRENT_KEY));
        form.email.value = email;
        form.message.value = message;
    }
};