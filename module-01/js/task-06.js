let input;
let total = 0;

while (true) {
  input = prompt("Введите число");


  if (input === null) {
    break;
  }

  input = Number(input);

  const someText = Number.isNaN(input);
  if (someText){
    alert (`Было введено не число, попробуйте еще раз`);
    continue;
  }

  total += input;
}

alert(`Общая сумма чисел равна ${total}`);
console.log(`Общая сумма чисел равна ${total}`);
