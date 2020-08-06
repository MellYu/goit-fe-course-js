class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

   start() {
    this.timerCounter();
  }

  timerCounter() {
    const timerData = this.getTime();
    const refs = {
      timerRef: document.querySelector(this.selector),
      days: document.querySelector('span[data-value="days"]'),
      hours: document.querySelector('span[data-value="hours"]'),
      mins: document.querySelector('span[data-value="mins"]'),
      secs: document.querySelector('span[data-value="secs"]'),
    };

    refs.days.innerHTML = timerData.days;
    refs.hours.innerHTML = timerData.hours;
    refs.mins.innerHTML = timerData.mins;
    refs.secs.innerHTML = timerData.secs;
  }

  getTime() {
    const targetDate = Date.parse(this.targetDate);
    const time = targetDate - Date.now();
    const intervalId = setInterval(this.timerCounter.bind(this), 1000);
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    if(time <= 0){
      clearInterval(intervalId);
      intervalId = null;
    }
    return {
      time,
      days,
      hours,
      mins,
      secs,
    };
  }

  pad(value) {
        return String(value).padStart(2, '0');
      }

}

const newYearTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 01 2021'),
});

newYearTimer.start();
