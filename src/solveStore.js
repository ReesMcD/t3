const Store = require('electron-store');

class SolveStore extends Store {
  constructor(settings) {
    super(settings);
  }

  getSolves(puzzle) {
    return this.get(`solves.${puzzle}`) || [];
  }

  getAllSolves() {
    return this.get('solves') || [];
  }

  save(puzzle, solves) {
    this.set(`solves.${puzzle}`, solves);
  }

  saveSolve(puzzle, time, formatedTime, scramble) {
    const puzzleSolves = this.getSolves(puzzle);

    const solve = {
      puzzle: puzzle,
      time: time,
      formatedTime: formatedTime,
      scramble: scramble,
      date: Date.now()
    };

    const solves = [...puzzleSolves, solve];
    this.save(puzzle, solves);
  }

  deleteAll() {
    this.clear();
  }

  // TODO: Delete One Solves, Delete all for Puzzle, Delete All Solves
}

module.exports = SolveStore;
