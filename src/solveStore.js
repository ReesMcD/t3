const Store = require('electron-store');

class SolveStore extends Store {
  constructor(settings) {
    super(settings);
  }
}

module.exports = SolveStore;
