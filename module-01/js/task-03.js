const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

message = prompt(`Введите пароль`);

if(message === null) {
    message = 'Отменено пользователем!';
}else if(message === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
}else if(message !== ADMIN_PASSWORD){
    message = 'Доступ запрещен, не верный пароль!';
}

alert(message);