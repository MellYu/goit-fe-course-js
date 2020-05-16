let quantity = 100;
let ordered = prompt(`Введите количетво товара`);

if (ordered <= quantity){
    console.log(`Заказ оформлен, с вами свяжется менеджер`);
} else {
    console.log(`На складе недостаточно товаров!`);
}