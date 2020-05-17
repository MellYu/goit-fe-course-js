const pricePerDroid = 3000;
let credits = 23580;

let buyQuantity = prompt(`Сколько дроидов Вы хотите купить?`);
Number(buyQuantity);

if (buyQuantity === null) {
  console.log("Отменено пользователем!");
} else{
const totalPrice = pricePerDroid * buyQuantity;
if (totalPrice >= credits) {
  console.log(`Не достаточно средств на счету!`);
} else if (totalPrice <= credits) {
  console.log(`Вы купили ${buyQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}
}