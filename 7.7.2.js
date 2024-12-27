/*Задание 7.7.2*/
function calculate(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return null;
  }
}

const args = [2, 3, "+"];
console.log(calculate.apply(null, args));
