/*Задание 7.7.1*/
// function printInfo() {
//   console.log(`Name: ${this.name}, Age: ${this.age}`);
// }

// const person = {
//   name: "Коля",
//   age: 30,
// };

// printInfo.call(person);
/*Задание 7.7.2*/
// function calculate(a, b, operator) {
//   switch (operator) {
//     case "+":
//       return a + b;
//     case "-":
//       return a - b;
//     case "*":
//       return a * b;
//     case "/":
//       return a / b;
//     default:
//       return null;
//   }
// }

// const args = [2, 3, "+"];
// console.log(calculate.apply(null, args));
/*Задание 7.7.3*/
// const users = [
//   { name: "Алиса", age: 25 },
//   { name: "Петя", age: 17 },
//   { name: "Вася", age: 19 },
//   { name: "Коля", age: 16 },
// ];

// const adults = users.filter((user) => user.age >= 18);
// const names = adults.map((user) => user.name);

// console.log(names);
/*Задание 7.7.4*/
// function setFullName(fullName) {
//   this.fullName = fullName;
// }

// const person = {
//   name: "Коля",
//   age: 30,
// };

// const setPersonFullName = setFullName.bind(person);
// setPersonFullName("Коля Николаев");

// console.log(person.fullName);
/*Задание 7.7.5*/
// function getUniqueSortedArray(arr) {
//   const uniqueArray = Array.from(new Set(arr));
//   return uniqueArray.sort((a, b) => a - b);
// }

// const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// const uniqueSortedNumbers = getUniqueSortedArray(numbers);

// console.log(uniqueSortedNumbers);
