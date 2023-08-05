// step-1: add click event handler with the login button //
document.getElementById('btn').addEventListener('click', function () {
    // step-2: get the email address inside the email input field
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value;
    userEmail.value = '';

    // step-3: get the password address inside the password input field
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    userPassword.value = '';


    if (email === 'mdnahid.pmg@gmail.com' && password === 'naHid123') {
        location.href = 'bank.html'
    }
    else {
        alert('Your UserName & Password Wrong!!')
    }

})