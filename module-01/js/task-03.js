const ADMIN_PASSWORD = 'jqueryismyjam';
let notice;

notice = prompt(`Введите пароль`);

if(notice === null) {
    notice = 'Отменено пользователем!';
}else if(notice === ADMIN_PASSWORD){
    notice = 'Добро пожаловать!';
}else if(notice !== ADMIN_PASSWORD){
    notice = 'Доступ запрещен, не верный пароль!';
}

console.log(notice);

alert(notice);