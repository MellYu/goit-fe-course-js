import './styles.css';

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const h1 = document.querySelector('.serg');

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const createRandomBG = {
  intervalID: null,
  isActive: false,
  start() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.intervalId = setInterval(() => {
      document.body.style = `background-color: ${
        colors[randomIntegerFromInterval(0, colors.length - 1)]
      };`}, 1000);
  },
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.isActive = false;
  },
};
startBtn.addEventListener('click', createRandomBG.start.bind(createRandomBG));
stopBtn.addEventListener('click', createRandomBG.stop.bind(createRandomBG));
