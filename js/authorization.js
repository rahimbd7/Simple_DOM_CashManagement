function getValueFromLogin(inputValue) {
    const user_value = document.querySelector(inputValue).value;
    document.querySelector(inputValue).value = '';
    return user_value;
}
function authorization(email, password) {
    if (email == 'admin@123.com' && password == '123') {
        window.location.href = "./dashboard.html";
    }
}