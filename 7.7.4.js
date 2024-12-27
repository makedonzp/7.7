/*Задание 7.7.4*/
function setFullName(fullName) {
  this.fullName = fullName;
}

const person = {
  name: "Коля",
  age: 30,
};

const setPersonFullName = setFullName.bind(person);
setPersonFullName("Коля Николаев");

console.log(person.fullName);
