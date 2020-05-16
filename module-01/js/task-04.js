const pricePerDroid = 3000;
let credits = 23580;

let buyQuantity = prompt(`Сколько дроидов Вы хотите купить?`);

Number(buyQuantity);
let message;
let totalPrice = pricePerDroid * buyQuantity;

if (buyQuantity === null) {
  message = "Отменено пользователем!";
} else if (totalPrice <= credits) {
  result = credits - totalPrice;
  message = `Вы купили ${buyQuantity} дроидов, на счету осталось ${result} кредитов`;
} else if (totalPrice >= credits) {
  message = `Не достаточно средств на счету!`;
}

if (buyQuantity !== null){
    console.log(`Стоимость заказа: ${totalPrice} кредитов`);
} else {}

console.log(message);
