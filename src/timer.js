const TimerMachine = require('timer-machine');

class Timer {
  constructor() {
    this.timerEl = document.getElementById('timer');
    this.timer = new TimerMachine();
    this.time = null;

    this.timer.on('time', () => {
      if (this.isStarted() === true) {
        this.timerEl.innerHTML = this.msToSecs(this.timer.timeFromStart());
      }
    });
  }

  start() {
    this.timer.timeFromStart();
    setInterval(this.timer.emitTime.bind(this.timer), 25);
    this.timer.start();
  }

  stop() {
    this.time = this.timer.timeFromStart();
    this.timer.stop();
    this.timerEl.innerHTML = this.msToTime(this.time);
  }

  ready() {
    this.timerEl.innerHTML = 'Ready';
  }

  isStopped() {
    return this.timer.isStopped();
  }

  isStarted() {
    return this.timer.isStarted();
  }

  getTime() {
    return this.time;
  }

  getFormatedTime() {
    return this.msToTime(this.time);
  }

  /**
   *
   * @param {*} s
   */
  msToTime(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    s = (s - secs) / 60;
    let mins = s % 60;

    const withMin = this.pad(mins) + ':' + this.pad(secs) + '.' + this.pad(ms);
    const withOutMin = this.pad(secs) + '.' + this.pad(ms);

    return mins === 0 ? withOutMin : withMin;
  }

  msToSecs(s) {
    let ms = s % 1000;
    s = (s - ms) / 1000;
    let secs = s % 60;
    return secs;
  }

  /**
   * Pad to 2 or 3 digits, default is 2
   * @param {*} n
   * @param {*} z
   */
  pad(n, z) {
    z = z || 2;
    return ('00' + n).slice(-z);
  }
}

module.exports = Timer;
