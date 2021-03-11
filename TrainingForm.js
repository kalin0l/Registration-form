const inputs = document.querySelectorAll('input');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.querySelector('#password');
const confirmPass = document.querySelector('#confirm');
const btn = document.querySelector('.btn');
const error = document.querySelectorAll('.error');

// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const userPattern = /\w/g;




// AllInputs.push(username);
// AllInputs.push(email);
// AllInputs.push(password);
// AllInputs.push(confirmPass);
// console.log(AllInputs);

const showError = function (input, Msg = '') {
    if (input == username) {
        input.style.border = '2px solid red';
        error[0].textContent = Msg;
        error[0].style.color = 'red';
    } else if (input == email) {
        input.style.border = '2px solid red';
        error[1].textContent = Msg;
        error[1].style.color = 'red';
    } else if (input == password) {
        input.style.border = '2px solid red';
        error[2].textContent = Msg;
        error[2].style.color = 'red';
    } else if (input = confirmPass) {
        input.style.border = '2px solid red';
        error[3].textContent = Msg;
        error[3].style.color = 'red';
    }


}

const showSuccesss = function (input, message = '') {
    if (input == username) {
        input.style.border = '2px solid green';
        error[0].textContent = message;
        error[0].style.color = 'green';
    } else if (input == email) {
        input.style.border = '2px solid green';
        error[1].textContent = message;
        error[1].style.color = 'green';
    } else if (input == password) {
        input.style.border = '2px solid green';
        error[2].textContent = message;
        error[2].style.color = 'green';
    } else if (input = confirmPass) {
        input.style.border = '2px solid green';
        error[3].textContent = message;
        error[3].style.color = 'green';
    }

}

const getFieldName = function (input) {
    return input.id[0].toUpperCase() + input.id.slice(1);
}

const checkPattern = function (input) {
    input.pattern = userPattern;
    if (input.value == '' && !userPattern.test(input.value)) {
        showError(input, `${getFieldName(input)} should be letters and numbers only!`);
    }

}





// Check the length of the input fields

const checkLength = function (input, min) {
    if (input.value.length < min) {
        input === username ? showError(input, `${getFieldName(input)} should contain atleast ${min} letters and numbers only!`) : showError(input, `${getFieldName(input)} should contain atleast ${min} symbols!`);
    } else {
        showSuccesss(input, `Your ${input.id} is valid!`);
    }

}
// Check confirmation of the password

const checkPass = function (input, pass2) {
    if (input.value == '' || input.value !== pass2.value) {
        showError(input, `The ${pass2.id} does not match`);
    } else {
        showSuccesss(input, `Confirmation of the ${pass2.id} is successful!`);
    }


}

// Email validation
const validateEmail = function (email) {
    if (re.test(email.value)) {
        showSuccesss(email, `You entered a valid ${email.id}!`);
    } else {
        showError(email, `You should enter a valid ${email.id}!`)
    }

}
inputs.forEach(function (input) {
    input.required = true;
});


btn.addEventListener('click', function () {
    // verifyUsername();
    checkLength(username, 5);
    validateEmail(email);
    checkLength(password, 6);
    checkLength(confirmPass, 6);
    checkPass(confirmPass, password);
    checkPattern(username);
});





//     inputs[1].maxLength = 25;
//     inputs[1].pattern = re;

//     if (validateEmail(email.value)) {
//         showSuccesss(email, 'You entered a valid email!');

//     } else {
//         showError(email, 'You should enter a valid email!');
//     }
// }


// // Validation of the input fields
// const verifyUsername = function () {
//     inputs[0].minLength = 5;
//     inputs[0].pattern = userPattern;

//     if (username.value === '' || username.value.length < username.minLength || username.pattern === userPattern) {
//         showError(username, 'It should contain atleast 5 letters and numbers only!');
//     } else {
//         showSuccesss(username, 'Your username is valid!');

//     }
// }


// const verifyPassword = function () {

//     inputs[2].minLength = 6;

//     if (password.value === '' || password.value.length < password.minLength) {
//         showError(password, 'It should contain atleast 6 letters');
//     } else {
//         showSuccesss(password, 'Your password is valid!');

//     }

// }
// const confirmPassword = function () {

//     inputs[3].minLength = 6;

//     if (confirmPass.value === '' || confirmPass.value !== password.value) {
//         showError(confirmPass, 'The password is not the same');
//     } else {
//         showSuccesss(confirmPass, 'Confirmation of the password is successful!');
//     }
// }

// const verify = function () {
//     checkLength(username,5);
//     checkLength(password,6);
//     checkLength(confirmPass,6);
//     validateEmail(email);
//     checkPass(confirmPass,password);
//     checkRequired([username,email,password,confirmPass])
//     // verifyPassword();
//     // confirmPassword();
// }

// inputs.forEach(function (input) {
//     input.required = true;
// });





