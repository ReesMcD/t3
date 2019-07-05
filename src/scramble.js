const Scrambo = require('scrambo');

class Scramble {
  constructor() {
    this.scrambler = new Scrambo();
    this.scrambleEl = document.getElementById('scramble');
  }

  setScramble(puzzle) {
    // TODO: Make scrammbles different length for larger puzzles
    const scramble = this.scrambler.type(puzzle).get();

    this.scrambleEl.innerHTML = scramble;
  }
}

module.exports = Scramble;
