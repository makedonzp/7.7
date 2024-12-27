/*Задание 7.7.5*/
function getUniqueSortedArray(arr) {
  const uniqueArray = Array.from(new Set(arr));
  return uniqueArray.sort((a, b) => a - b);
}

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const uniqueSortedNumbers = getUniqueSortedArray(numbers);

document.querySelector(
  `.${taskClass[4]}`
).innerHTML += `<p class="task-5"> ${uniqueSortedNumbers} </p>`;
