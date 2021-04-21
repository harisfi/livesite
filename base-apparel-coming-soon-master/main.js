var formEl = document.getElementById('form');
var iGroup = document.getElementById('inputs');
var iconAlert = document.getElementById('alerta');
var msgAlert = document.getElementById('feedback');

formEl.addEventListener('submit', function(evt) {
    evt.preventDefault();
    var inputVal = document.getElementById('txInput').value;

    if (inputVal == '' || inputVal == null) {
    msgAlert.innerHTML = 'Please provide an email';
    iGroup.style.border = '1px solid hsl(0, 93%, 68%)';
    if (iconAlert.classList.contains('d-none')) {
        iconAlert.classList.remove('d-none');
    }
    if (!msgAlert.classList.contains('d-block')) {
        msgAlert.classList.add('d-block');
    }
    } else if (!validateEmail(inputVal)) {
    msgAlert.innerHTML = 'Please provide a valid email';
    iGroup.style.border = '1px solid hsl(0, 93%, 68%)';
    if (iconAlert.classList.contains('d-none')) {
        iconAlert.classList.remove('d-none');
    }
    if (!msgAlert.classList.contains('d-block')) {
        msgAlert.classList.add('d-block');
    }
    } else {
    iGroup.style.border = '1px solid hsl(0, 36%, 70%)';
    if (!iconAlert.classList.contains('d-none')) {
        iconAlert.classList.add('d-none');
    }
    if (msgAlert.classList.contains('d-block')) {
        msgAlert.classList.remove('d-block');
    }
    }
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}