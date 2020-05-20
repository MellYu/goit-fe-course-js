const pricePerDroid = 3000;
let credits = 23580;

const buyQuantity = prompt(`Сколько дроидов Вы хотите купить?`);

if (buyQuantity === null) {
  console.log("Отменено пользователем!");
} else{
const totalPrice = pricePerDroid * buyQuantity;
if (totalPrice >= credits) {
  console.log(`Не достаточно средств на счету!`);
} else {
  console.log(`Вы купили ${buyQuantity} дроидов, на счету осталось ${credits - totalPrice} кредитов`);
}
}