const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show Error Message
function showError (input, message) {
    input.parentElement.className = 'form-control error';
    input.nextElementSibling.innerHTML = message;
}

// Show Success outline
function showSuccess (input) {
    input.parentElement.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
        return;
    } else {
        showError(input, 'Email is not valid.')
    }
}

// Check Required Fields
function checkRequired(inputArray) {
    inputArray.forEach(element => {
        if(element.value.trim() === '') {
            showError(element, `${getFieldName(element)} is riquered`);
        return;
        } else {
            showSuccess(element)
        }
    });
};

// Check Field Name
function getFieldName(element) {
    return element.id.charAt(0).toUpperCase() + element.id.slice(1)
};

// Check input Length
function checkLength(input, min, max) {
    if(input.value.length < min) {
        showError(input, `${getFieldName(input)} must have at least ${min} characters`);
        return;
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
        return;
    } else {
        showSuccess(input);
    }
}

// Check Password match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
};

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, password, password2])
    checkLength(username, 3, 30);
    checkLength(password, 6, 20);
    checkEmail(email);
    checkPasswordsMatch(password, password2);
})
