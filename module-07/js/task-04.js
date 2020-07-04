let currentValue = 0;

const valueRef = document.querySelector('#value');
const incrementRef = document.querySelector('[data-action="increment"]')
const decrementRef = document.querySelector('[data-action="decrement"]')

const increment = () => {
    currentValue += 1;
    valueRef.textContent = currentValue;
};

const decrement = () => {
    currentValue -= 1;
    valueRef.textContent = currentValue;
};

incrementRef.addEventListener('click', increment);
decrementRef.addEventListener('click', decrement);
