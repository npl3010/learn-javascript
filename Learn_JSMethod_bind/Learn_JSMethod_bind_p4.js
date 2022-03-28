const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


// Test:
console.log(document.querySelector('#my-button'));
console.log($('#my-button'));


// Use:
const myButton = $('#my-button');

myButton.addEventListener('click', () => {
    console.log('Hello!');
});