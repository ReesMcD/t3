const SolveStore = require('./solveStore');

class Solves {
  constructor() {
    this.solveStore = new SolveStore({ name: 'Solves' });
    this.solveEl = document.getElementById('solves');
  }

  getSolves(puzzle) {
    return this.solveStore.getSolves(puzzle);
  }

  saveSolve(puzzle, time, formatedTime, scramble) {
    this.solveStore.saveSolve(puzzle, time, formatedTime, scramble);
  }

  deleteAll() {
    this.solveStore.deleteAll();
  }

  renderPuzzleSolves(puzzle) {
    this.solveEl.innerHTML = '';
    const solves = this.getSolves(puzzle);
    solves.forEach(solve => {
      const str = `${solve.formatedTime}, `;
      this.solveEl.insertAdjacentHTML('beforeend', str);
    });
  }
}

module.exports = Solves;
