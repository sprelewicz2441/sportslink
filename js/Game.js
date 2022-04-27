
export default class Game {
  constructor() {
    const keyboard_wrapper = document.querySelector("#game-keyboard");
    this.setupKeyboard(keyboard_wrapper);
    this.game_matix = this.setupGameboard(document.querySelector("#game-board"));
    this.current_row = 0;
    this.current_col = 0;
    this.currentGuess = '';
    this.wordOfDay = "bauer"
  }

  handleKeyPress(letter) {
    if(letter == "ENT") {
      this.checkWord();
      return;
    }

    if(letter = "DEL") {
      this.deleteChar();
      return;
    }
    this.game_matix[this.current_row][this.current_col].innerHTML = letter;
    this.currentGuess += letter;
    if(this.game_matix[this.current_row].length > this.current_col+1) {
      this.current_col++;
    }
  }

  checkWord() {
    if(this.currentGuess.length < 5) {
      alert("Not enough letters");
      return;
    }

    const rowTiles = this.game_matix[this.current_row];
    for (var i = 0; i < rowTiles.length; i++) {
      if(rowTiles[i].innerHTML == this.wordOfDay[i]) {
        rowTiles[i].classList.add("correct-letter");
      } else if (this.wordOfDay.includes(rowTiles[i].innerHTML)) {
        rowTiles[i].classList.add("contains-letter");
      }
    }

    this.current_row++;
    this.current_col = 0;
  }

  setupGameboard(board) {
    const matrix = [];
    const gb_rows = board.querySelectorAll(".word-row");
    gb_rows.forEach((e) => {
      let current_row = [];
      e.querySelectorAll(".game-tile").forEach((gt) => {
        current_row.push(gt);
      });
      matrix.push(current_row);
    });
    console.log(matrix);
    return matrix;
  }

  setupKeyboard(keyboard) {
    const v_keys = keyboard.querySelectorAll('button');
    const self = this;

    v_keys.forEach(function (button, index) {
      button.addEventListener('click', (event) => {
        self.handleKeyPress(event.target.getAttribute('data-letter'));
      });  
    });
  }
}