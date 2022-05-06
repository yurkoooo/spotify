const form = document.querySelector('.footer__form');
const button = document.querySelector('.footer__btn');
const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const input = document.querySelector('.footer__input');

input.addEventListener('keyup', function validateEmail () {
    const email = document.querySelector('.footer__input').value;
    if (email.match(pattern)) {
        input.classList.add('footer__success');
        input.classList.remove('footer__error');
    } else {
        input.classList.remove('footer__success');
        input.classList.add ('footer__error');
    }
}
)

var success = document.querySelector('.footer__successDescription');
var error = document.querySelector('.footer__errorDescription');

button.addEventListener('click', function (){
    const email = document.querySelector('.footer__input').value;
    event.preventDefault();
    if (email.match(pattern)) {
        error.style.display = 'none';
        success.style.display = 'block';
    } else {
        success.style.display = 'none';
        error.style.display = 'block';
    }
})
