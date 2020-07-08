const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

const ingredientsRef = document.querySelector('#ingredients')
const ingrRef = ingredient => {
  const ingrItem = document.createElement('li');
  ingrItem.textContent = ingredient;
  return ingrItem;
};

const ingredientsList = ingredients.map(ingredient => ingrRef(ingredient));
ingredientsRef.append(...ingredientsList);