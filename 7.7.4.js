/*Задание 7.7.4*/
function setFullName(fullName) {
  this.fullName = fullName;
}

const personName = {
  name: "Коля",
  age: 30,
};

const setPersonFullName = setFullName.bind(personName);
setPersonFullName("Коля Николаев");

document.querySelector(
  `.${taskClass[3]}`
).innerHTML += `<p class="task-4"> ${personName.fullName} </p>`;
