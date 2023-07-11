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

const formSide = document.querySelector('.input-side');
const thankSide = document.querySelector('.completed-side');



function space(el, after) {
    after = after || 4;
    var v = el.value.replace(/[^A-Z\d]/ig, ''),
        reg = new RegExp(".{" + after + "}", "g");
    el.value = v.replace(reg, function (a) {
        return a + ' ';
    });
}

var el = document.getElementById('input-number');
el.addEventListener('keyup', function () {
    space(this, 4);
});



function convertirMayusculas(inputName) {
    inputName.value = inputName.value.toUpperCase();
}

var input = document.getElementById('input-name');
input.addEventListener('keyup', function () {
    convertirMayusculas(this);
});

function convertirMayusculas(inputNumber) {
    inputNumber.value = inputNumber.value.toUpperCase();
}

var input = document.getElementById('input-number');
input.addEventListener('keyup', function () {
    convertirMayusculas(this);
});




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







form.addEventListener('submit', function (event) {
    event.preventDefault();

    let hasError = false;

    if (inputName.value.length === 0) {
        nameError.classList.remove('hide');
        inputName.classList.add('input-error');
        hasError = true;
    } else {
        nameError.classList.add('hide');
        inputName.classList.remove('input-error');
    }

    const numberI = inputNumber.value.trim();
    const numberRegex = /^[0-9\s]*$/;

    if (numberI.length === 0) {
        numberError.innerText = "Can't be blank";
        inputNumber.classList.add('input-error');
        hasError = true;
    } else if (!numberRegex.test(numberI)) {
        numberError.innerText = "Wrong format, numbers only";
        inputNumber.classList.add('input-error');
        hasError = true;
    } else {
        numberError.innerText = "";
        inputNumber.classList.remove('input-error');
    }

    if (inputMonth.value.length === 0) {
        monthError.classList.remove('hide');
        inputMonth.classList.add('input-error');
        hasError = true;
    } else {
        monthError.classList.add('hide');
        inputMonth.classList.remove('input-error');
    }

    if (inputYear.value.length === 0) {
        monthError.classList.remove('hide');
        inputYear.classList.add('input-error');
        hasError = true;
    } else {
        monthError.classList.add('hide');
        inputYear.classList.remove('input-error');
    }

    if (inputCVC.value.length === 0) {
        cvcError.classList.remove('hide');
        inputCVC.classList.add('input-error');
        hasError = true;
    } else {
        cvcError.classList.add('hide');
        inputCVC.classList.remove('input-error');
    }

    if (!hasError) {
        
        formSide.classList.add('hide');
        thankSide.classList.remove('hide');
        console.log('ola?');
    }
});

