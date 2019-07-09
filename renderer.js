const EventHandler = require('./eventHandler');
const eventHandler = new EventHandler();

document.body.onkeyup = e => {
  e.preventDefault();
  if (eventHandler.isTimerStopped() && e.keyCode == 32) {
    eventHandler.onTimerStart();
  } else if (eventHandler.isTimerStarted()) {
    eventHandler.onTimerStop();
  }
};

document.body.onkeydown = e => {
  e.preventDefault();
  if (eventHandler.isTimerStopped() && e.keyCode == 32)
    eventHandler.onTimerReady();
};

document.getElementById('puzzle').onchange = () => {
  eventHandler.onPuzzleChange();
};

document.getElementById('deleteAllSolves').onclick = () => {
  eventHandler.onDeleteAll();
};
