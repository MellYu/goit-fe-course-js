const textRef = document.querySelector('#text');
const changeFontRef = document.querySelector('#font-size-control');

const changingFontSize = (event) => {
    textRef.style.fontSize = event.currentTarget.value + 'px';
};

changeFontRef.addEventListener('input', changingFontSize);
