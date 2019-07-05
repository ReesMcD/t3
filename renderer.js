const Timer = require('./src/timer');
const timer = new Timer();

document.body.onkeyup = e => {
  if (timer.isStopped() && e.keyCode == 32) {
    timer.timerStart();
  } else if (timer.isStarted()) {
    timer.timerStop();
  }
};

document.body.onkeydown = e => {
  if (timer.isStopped() && e.keyCode == 32) timer.ready();
};

// TODO: Change scramble on select change

// TODO: Solves, Avg, Reset, get Scrambles
