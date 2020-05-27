let input;
const numbers = [];
let total = 0;

do {
  input = prompt("Введите число");
  if (Number.isNaN(+input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  numbers.push(+input);
} while (input !== null);
if(numbers.length !== 0){
  for (const number of numbers) {
    total += number;
  }
}
console.log(`Общая сумма чисел равна ${total}`);
