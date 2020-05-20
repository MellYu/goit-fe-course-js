let total = 0;
let input;

do {
  input = prompt("Введите число");
  input = Number(input);
  if (Number.isNaN(+input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += input;
} while (input !== 0);

console.log(`Общая сумма равна ${total}`);
