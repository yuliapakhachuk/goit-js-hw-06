// Завдання 2
// HTML містить порожній список ul#ingredients.

// <ul id="ingredients"></ul>
// JavaScript містить масив рядків.

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. 
// Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const createItems = (ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  document.querySelector("#ingredients").append(li);
}
ingredients.forEach(ingredient => createItems(ingredient))
