const form = document.querySelector ('form');

form.addEventListener('submit','event'); { Event.preventDefault()
const username= document.getElementById ('username').value;

const email= document.getElementById ('email').value;

const password= document.getElementById ('password').value;

const confirmPassword= document.getElementById ('confirm-password').value;

if (password !== confirmPassword) {
    alert('Пароли не совпадают!');
    return;
}

 };