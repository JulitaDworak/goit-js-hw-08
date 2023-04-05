// import throttle from 'lodash.throttle'

const feedbackInfoMail = document.querySelector('input[type=" email"]')
const feedbackInfoMsg = document.querySelector('textarea[name="message"]')
const feedbackBtn= document.querySelector('button[type="submit"]')

const feedbackData = document.querySelector('.feedback-form')

const LOCALSTORAGE_KEY ="feedback-form-state"

const test = () => {
    feedbackInfoMail.innerHTML = feedbackData.elements.email.value
}

// feedbackInfoMsg.innerHTML = feedbackData.elements.email.value
// feedbackInfoMail.textContent = feedbackData.elements.email.value

console.log(test());


const data = 
{email: `${feedbackData.elements.email.value}`,
message: `${feedbackData.elements.message.value}`,
}




const allData = (e) => {
    e.preventDefault();
    localStorage.setItem (LOCALSTORAGE_KEY, data)
}

// const showAllData = JSON.stringify(allData)
// const showAll = JSON.parse(allData)
// console.log(showAllData);
// console.log(showAll);


console.log(data);


feedbackBtn.addEventListener('click',allData)
