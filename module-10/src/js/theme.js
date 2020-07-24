import localStorage from './storage.js';
const bodyRef = document.querySelector('body');
const btnRef = document.querySelector('.js-switch-input');
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const changingTheme = () => {
 bodyRef.className = '';
 bodyRef.classList = btnRef.checked ? 'dark-theme' : 'light-theme';
 localStorage.save('theme', bodyRef.className)
};
btnRef.addEventListener('change', changingTheme);

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.load('theme') === 'dark-theme') {
        btnRef.checked = true;
    };
    bodyRef.classList.add(localStorage.load('theme'));
});