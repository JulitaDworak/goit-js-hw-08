
import throttle from 'lodash.throttle'

const feedbackInfoMail = document.querySelector('input[type="email"]')
const feedbackInfoMsg = document.querySelector('textarea[name="message"]')
const feedbackBtn= document.querySelector('button[type="submit"]')

const feedbackData = document.querySelector('.feedback-form')

const LOCALSTORAGE_KEY ="feedback-form-state"
let formData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))

const dataToSave = {
    email:'',
    message: '',
}
const showInInput = () => {
    if (formData) {
      dataToSave.email= formData.email
      dataToSave.message= formData.message
    }
    else {
        dataToSave.email= ""
      dataToSave.message= ""
    }

    feedbackInfoMail.value = dataToSave.email;
    feedbackInfoMsg.value = dataToSave.message;
};

const saveData = throttle(event => {
    dataToSave[event.target.name] = event.target.value;
    localStorage.setItem( LOCALSTORAGE_KEY ,JSON.stringify(dataToSave));
  }, 500);
  
  const clearData = event => {
    event.preventDefault();
    console.log(dataToSave);
    localData = null;
    localStorage.clear();
    showInInput();
  };
  
showInInput();
  feedbackInfoMail.addEventListener('input', saveData);
  feedbackInfoMsg.addEventListener('input', saveData);
  feedbackBtn.addEventListener('click', clearData);

// const form = document.querySelector('.form-feedback')
// const emailEl = document.querySelector('input[type="email"]')
// const messageEl = document.querySelector('textarea[name="message"]')
// const LOCALSTORAGE_KEY = "feedback-form-state"
// let data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY))

// const datatoSave = {
//     email:'',
//     message:''
// }


// const name = (params) => {
    
// }


// console.log(emailEl)
// console.log(messageEl);

