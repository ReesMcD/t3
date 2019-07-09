class Puzzle {
  constructor() {
    this.puzzleEl = document.getElementById('puzzle');
  }

  getPuzzle() {
    return this.puzzleEl.value;
  }

  getPuzzleName() {
    return this.puzzleEl.options[this.puzzleEl.selectedIndex].text;
  }
}

module.exports = Puzzle;
