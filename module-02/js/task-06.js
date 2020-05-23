let input;
const numbers = [];
let total = 0;

const sumOfNumbers = function(){
    do{
        input = prompt('Введите число');
        if (Number.isNaN(+input)) {
            alert(`Было введено не число, попробуйте еще раз`);
            continue;
          }
          numbers.push(input);
    } while (input !== null); 
    if (numbers !== null){
    for (let i = 0; i < numbers.length; i += 1){
        total += +numbers[i];
    }}

    return total;
}

console.log(sumOfNumbers());

