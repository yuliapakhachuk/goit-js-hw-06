// Завдання 8
// Напиши скрипт управління формою логіна.

//     Обробка відправлення форми form.login - form 
// повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка 
// не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля,
//     виводь alert з попередженням про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму,
//     збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
// а значення поля - значенням властивості.Для доступу до елементів 
// форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення 
// полів форми методом reset.
// ***
// У завданні 8 дані в консоль слід виводити саме як об’єкт (а НЕ рядок). 
// При цьому очищати поля форми слід лише при її успішному 
// сабміті(коли обидва іпнути заповнені).

const refs = {
    form : document.querySelector(".login-form"),
}

refs.form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
const {
    elements: { email, password }
} = event.currentTarget;

if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
} 
    console.log({ email: email.value, password: password.value});

event.currentTarget.reset();
}