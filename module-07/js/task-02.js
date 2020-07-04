const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

console.log(ingredients);

const ingredientsRef = document.querySelector('#ingredients')
const ingredientRef = ingredients.forEach(ingredient => {
    const ingrRef = document.createElement('li');
    ingrRef.textContent = ingredient;
    ingredientsRef.appendChild(ingrRef);
});
console.log(ingredientsRef);


