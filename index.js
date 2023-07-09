const inputName = document.querySelector('.input-name');
const inputNumber = document.querySelector('.input-number');
const inputMonth = document.querySelector('.input-month');
const inputYear = document.querySelector('.input-year');
const inputCVC = document.querySelector('.input-cvc');
const cardName = document.querySelector('.card-name');
const cardNumber = document.querySelector('.card-number');
const cardMonth = document.querySelector('.card-date');
const cardYear = document.querySelector('.card-year');
const cardCVC = document.querySelector('.card-pin');
const form = document.querySelector('.form');

inputName.addEventListener('input', ()=> {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
    }
})

inputNumber.addEventListener('input', () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardName.innerText = "0000 0000 0000 0000";
    }
})

inputMonth.addEventListener('input', () => {
    cardMonth.innerText = inputMonth.value;

    if (inputMonth.value.length === 0) {
        cardMonth.innerText = "00";
    }
})

inputYear.addEventListener('input', () => {
    cardYear.innerText = inputYear.value;

    if (inputYear.value.length === 0) {
        cardYear.innerText = "00";
    }
})

inputCVC.addEventListener('input', () => {
    cardCVC.innerText = inputCVC.value;

    if (inputCVC.value.length === 0) {
        cardCVC.innerText = "000";
    }
})