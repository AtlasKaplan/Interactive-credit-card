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

const numberError = document.querySelector('#number-error');
const nameError = document.querySelector('#name-error');
const monthError = document.querySelector('#month-error');
const cvcError = document.querySelector('#cvc-error');

// function space(el, after) {
//     after = after || 4;
//     var v = el.value.replace(/[^\dA-Z]/g, ''),
//         reg = new RegExp(".{" + after + "}", "g")
//     el.value = v.replace(reg, function (a, b, c) {
//         return a + ' ';
//     });
// }

// var el = document.getElementById('input-number');
// el.addEventListener('keyup', function () {
//     space(this, 4);
// });

// var cleave = new Cleave('input-number', {
//     creditCard: true,
// });

inputName.addEventListener('input', ()=> {
    cardName.innerText = inputName.value;

    if (inputName.value.length === 0) {
        cardName.innerText = "Jane Appleseed";
    }
})

inputNumber.addEventListener('input', () => {
    cardNumber.innerText = inputNumber.value;

    if (inputNumber.value.length === 0) {
        cardNumber.innerText = "0000 0000 0000 0000";
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







form.addEventListener('click', (e) => {
    e.preventDefault();


if (inputName.value.length == 0){
    nameError.classList.remove('hide');
    inputName.classList.add('input-error');
}
else {
    nameError.classList.add('hide');
    inputName.classList.remove('input-error');
}




const numberI = inputNumber.value;
    const numberRegex = /^[0-9\s]*$/;

if (!numberRegex.test(numberI)) {
    numberError.classList.remove('hide');
    inputNumber.classList.add('input-error');
} 
else {
    numberError.classList.add('hide');
    inputNumber.classList.remove('input-error');
}


if (inputMonth.value.length == 0) {
    monthError.classList.remove('hide');
    inputMonth.classList.add('input-error');
}
else {
    monthError.classList.add('hide');
    inputMonth.classList.remove('input-error');
}

if (inputYear.value.length == 0) {
    monthError.classList.remove('hide');
    inputYear.classList.add('input-error');
}
else {
    monthError.classList.add('hide');
    inputYear.classList.remove('input-error');
}

if (inputCVC.value.length == 0) {
    cvcError.classList.remove('hide');
    inputCVC.classList.add('input-error');
}
else {
    cvcError.classList.add('hide');
    inputCVC.classList.remove('input-error');
}

});

