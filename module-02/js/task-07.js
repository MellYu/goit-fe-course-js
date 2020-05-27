const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let login = prompt("Введите логин");

const isLoginValid = function (login) {
  // твой код
  if (login.length > 16 || login.length < 4) {
    return console.log("Ошибка! Логин должен быть от 4 до 16 символов");
  }
  return true;
};

const isLoginUnique = function (allLogins, login) {
  // твой код
  if (allLogins.includes(login)) {
    return console.log("Такой логин уже используется!");
  }
  return true;
};

const addLogin = function (allLogins, login) {
  // твой код
  if (isLoginValid(login) && isLoginUnique(allLogins, login)) {
    logins.push(login);
    console.log("Логин успешно добавлен!");
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
addLogin(logins, "Ajax"); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
