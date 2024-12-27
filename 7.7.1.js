const initialPage = document.querySelector(".container");

let page = [
  { task: "Задание 7.7.1" },
  { task: "Задание 7.7.2" },
  { task: "Задание 7.7.3" },
  { task: "Задание 7.7.4" },
  { task: "Задание 7.7.5" },
];
let taskClass = [
  "task-first",
  "task-second",
  "task-third",
  "task-fourth",
  "task-fifth",
];
for (let i = 0; i < page.length; i++) {
  const taskContent = `<div class="task ${taskClass[i]}"><h3 class="task-${
    i + 1
  }">${page[i].task}</h3></div>`;
  initialPage.insertAdjacentHTML("beforeend", taskContent);
}
/*Задание 7.7.1*/
function printInfo() {
  document.querySelector(
    `.${taskClass[0]}`
  ).innerHTML += `<p class="task-1">Name: ${this.name}, Age: ${this.age}</p>`;
}
const person = {
  name: "Коля",
  age: 30,
};

printInfo.call(person);
