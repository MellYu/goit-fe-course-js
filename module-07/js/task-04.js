let currentValue = 0;

const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]')
const decrementRef = document.querySelector('[data-action="decrement"]')

const increment = () => valueRef.textContent = currentValue += 1;
const decrement = () => valueRef.textContent = currentValue -= 1;


incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);
