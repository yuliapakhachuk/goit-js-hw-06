// Завдання 5
// Напиши скрипт, який під час набору тексту
// в інпуті input#name - input(подія input),
// підставляє його поточне значення в span#name - output.
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>
const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const DEFAULT_NAME = "Anonymous";

input.addEventListener("input", enterName);

function enterName() {
    const name = input.value;
    (input.value === "") ? (output.textContent = DEFAULT_NAME) : (output.textContent = name);
}