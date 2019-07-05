const TimerMachine = require('timer-machine');
const Scrambler = require('./scramble');

class Timer {
  constructor() {
    this.timer = new TimerMachine();
    this.scrambler = new Scrambler();
    this.timerEl = document.getElementById('timer');
    this.puzzleEl = document.getElementById('puzzle');
    this.scrambler.setScramble(this.puzzleEl.value);

    this.timer.on('time', () => {
      if (this.isStarted() === true) {
        this.timerEl.innerHTML = this.msToTime(this.timer.timeFromStart());
      }
    });
  }

  timerStart() {
    this.timer.timeFromStart();
    setInterval(this.timer.emitTime.bind(this.timer), 10);
    this.timer.start();
  }

  timerStop() {
    let time = this.timer.timeFromStart();
    this.timer.stop();
    this.timerEl.innerHTML = this.msToTime(time);
    console.log(this.msToTime(time));
    this.scrambler.setScramble(this.puzzleEl.value);
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

    return this.pad(mins) + ':' + this.pad(secs) + '.' + this.pad(ms, 3);
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
