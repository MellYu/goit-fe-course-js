let total = 0;
let input;

do {
  input = prompt("Введите число");
  if (Number.isNaN(+input)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += +input;
} while (input !== null);

console.log(`Общая сумма равна ${total}`);
