const Timer = require('./src/timer');
const Scrambler = require('./src/scramble');
const Puzzle = require('./src/puzzle');
const Solves = require('./src/solves');

class EventHandler {
  constructor() {
    this.timer = new Timer();
    this.scrambler = new Scrambler();
    this.puzzle = new Puzzle();
    this.solves = new Solves();

    this.solves.renderPuzzleSolves(this.puzzle.getPuzzleName());
    this.scrambler.setScramble(this.puzzle.getPuzzle());
  }

  isTimerStopped() {
    return this.timer.isStopped();
  }

  isTimerStarted() {
    return this.timer.isStarted();
  }

  onPuzzleChange() {
    this.scrambler.setScramble(this.puzzle.getPuzzle());
    this.solves.renderPuzzleSolves(this.puzzle.getPuzzleName());
  }

  onTimerStart() {
    this.timer.start();
  }

  onTimerReady() {
    this.timer.ready();
  }

  onTimerStop() {
    this.timer.stop();
    this.solves.saveSolve(
      this.puzzle.getPuzzleName(),
      this.timer.getTime(),
      this.timer.getFormatedTime(),
      this.scrambler.getCurrentScamble()
    );
    this.scrambler.setScramble(this.puzzle.getPuzzle());
    this.solves.renderPuzzleSolves(this.puzzle.getPuzzleName());
  }

  onDeleteAll() {
    this.solves.deleteAll();
    this.solves.renderPuzzleSolves(this.puzzle.getPuzzleName());
  }
}

module.exports = EventHandler;
