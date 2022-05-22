
export default class Game {
  constructor() {
    const keyboard_wrapper = document.querySelector("#game-keyboard");
    this.setupKeyboard(keyboard_wrapper);
    this.game_matix = this.setupGameboard(document.querySelector("#game-board"));
    this.current_row = 0;
    this.current_col = 0;
    this.currentGuess = '';
    this.wordOfDay = "evans"
  }

  handleKeyPress(letter) {
    if(letter == "ENT") {
      this.checkWord();
      return;
    }

    if(letter == "DEL") {
      this.deleteChar();
      return;
    }
    
    if(this.game_matix[this.current_row].length >= this.current_col+1) {
      this.game_matix[this.current_row][this.current_col].innerHTML = letter;
      this.currentGuess += letter;
      this.current_col++;
    }
  }

  deleteChar() {
    if(this.current_col > 0) {
      this.current_col--;
      this.game_matix[this.current_row][this.current_col].innerHTML = '';
    }
  }

  checkWord() {
    const rowTiles = this.game_matix[this.current_row];
    let lettersRight = 0;
    for (var i = 0; i < rowTiles.length; i++) {
      const keyboardLetter = document.querySelector('[data-letter="' + rowTiles[i].innerHTML + '"]');
      if(rowTiles[i].innerHTML == this.wordOfDay[i]) {
        keyboardLetter.classList.remove("key-default");
        keyboardLetter.classList.add("correct-key-letter");
        rowTiles[i].classList.add("correct-letter");
        lettersRight++;
      } else if (this.wordOfDay.includes(rowTiles[i].innerHTML)) {
        keyboardLetter.classList.remove("key-default");
        keyboardLetter.classList.add("contains-letter");
        rowTiles[i].classList.add("contains-letter");
      } else {
        keyboardLetter.classList.remove("key-default");
        keyboardLetter.classList.add("nope-key-letter");
        rowTiles[i].classList.add("nope-letter");
      }
    }

    this.current_row++;
    this.current_col = 0;

    if(lettersRight == 5) {
      document.querySelector("#messages").innerHTML = "YOU WIN!";
      document.querySelector("#game-keyboard").style.display = "none";
    }

    if(this.current_row > 4) {
      document.querySelector("#messages").innerHTML = this.wordOfDay.toUpperCase();
      document.querySelector("#game-keyboard").style.display = "none";
    }
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