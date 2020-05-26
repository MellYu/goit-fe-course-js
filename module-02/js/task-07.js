const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите логин");

const isLoginValid = function (login) {
  // твой код
  if (login.length > 16 || login.length < 4) {
    return alert(`Ошибка! Логин должен быть от 4 до 16 символов`);
  }
};

const isLoginUnique = function (logins, login) {
  // твой код
  if (logins.includes(login)) {
    return alert(`Такой логин уже используется`);
  }
};

const addLogin = function (logins, login) {
  // твой код
  isLoginValid(login);
  isLoginUnique(logins, login);
  logins.push(login);
  return alert("Логин успешно добавлен!");
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
