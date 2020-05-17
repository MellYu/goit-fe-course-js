let country = prompt(`Введите страну доставки!`);
let cost = 100;
let result = `Доставка в ${country} будет стоить ${cost} кредитов!`;
let unCorrect = `В вашей стране доставка не доступна`;

if (country === null) {
  result = "Отменено пользователем!";
  console.log(result);
} else {
  switch (country.toLowerCase()) {
    case "китай":
      alert(result);
      console.log(result);
      break;
    case "чили":
      cost = 250;
      result = `Доставка в ${country} будет стоить ${cost} кредитов!`;
      alert(result);
      console.log(result);
      break;
    case "австралия":
      cost = 170;
      result = `Доставка в ${country} будет стоить ${cost} кредитов!`;
      alert(result);
      console.log(result);
      break;
    case "индия":
      cost = 80;
      result = `Доставка в ${country} будет стоить ${cost} кредитов!`;
      alert(result);
      console.log(result);
      break;
    case "ямайка":
      cost = 120;
      result = `Доставка в ${country} будет стоить ${cost} кредитов!`;
      alert(result);
      console.log(result);
      break;
    default:
      alert(unCorrect);
      break;
    // case null:
    //     result = ('Отменено пользователем!');
    //     console.log(result);
    //     break;
  }
}
