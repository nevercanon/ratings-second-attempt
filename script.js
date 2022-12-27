//initialize variables

const radio1 = document.querySelector('#one');
const radio2 = document.querySelector('#two');
const radio3 = document.querySelector('#three');
const radio4 = document.querySelector('#four');
const radio5 = document.querySelector('#five');

const label1 = document.querySelector('#label1');
const label2 = document.querySelector('#label2');
const label3 = document.querySelector('#label3');
const label4 = document.querySelector('#label4');
const label5 = document.querySelector('#label5');

const score = document.querySelector('span');

const submit = document.querySelector('#submit');

const thanks = document.querySelector('.second');
const firstScreen = document.querySelector('.first');

const form = document.querySelector('form');

//add click listener to each button, remove focus styles from other buttons

radio1.addEventListener('click', () => {
    label1.classList.add('selected');
    label2.classList.remove('selected');
    label3.classList.remove('selected');
    label4.classList.remove('selected');
    label5.classList.remove('selected');
    score.innerText = label1.innerText;
})

radio2.addEventListener('click', () => {
    label1.classList.remove('selected');
    label2.classList.add('selected');
    label3.classList.remove('selected');
    label4.classList.remove('selected');
    label5.classList.remove('selected');
    score.innerText = label2.innerText;
})

radio3.addEventListener('click', () => {
    label1.classList.remove('selected');
    label2.classList.remove('selected');
    label3.classList.add('selected');
    label4.classList.remove('selected');
    label5.classList.remove('selected');
    score.innerText = label3.innerText;
})

radio4.addEventListener('click', () => {
    label1.classList.remove('selected');
    label2.classList.remove('selected');
    label3.classList.remove('selected');
    label4.classList.add('selected');
    label5.classList.remove('selected');
    score.innerText = label4.innerText;
})

radio5.addEventListener('click', () => {
    label1.classList.remove('selected');
    label2.classList.remove('selected');
    label3.classList.remove('selected');
    label4.classList.remove('selected');
    label5.classList.add('selected');
    score.innerText = label5.innerText;
})

//when submitted, switch displayed screen

form.addEventListener('submit', (e) => {
    e.preventDefault();
    thanks.classList.remove('display-none');
    firstScreen.classList.add('display-none');
})