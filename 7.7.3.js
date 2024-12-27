/*Задание 7.7.3*/
const users = [
  { name: "Алиса", age: 25 },
  { name: "Петя", age: 17 },
  { name: "Вася", age: 19 },
  { name: "Коля", age: 16 },
];

const adults = users.filter((user) => user.age >= 18);
const names = adults.map((user) => user.name);

document.querySelector(
  `.${taskClass[2]}`
).innerHTML += `<p class="task-3"> ${names} </p>`;
