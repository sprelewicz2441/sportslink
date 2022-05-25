
export default class Game {
  constructor() {
    const keyboard_wrapper = document.querySelector("#game-keyboard");
    this.setupKeyboard(keyboard_wrapper);
    this.game_matix = this.setupGameboard(document.querySelector("#game-board"));
    this.current_row = 0;
    this.current_col = 0;
    this.currentGuess = '';
    this.allGuesses = [];
    this.wordOfDay = "tyrod";

    // Setup cache
    this.lcldb = localforage.createInstance({
      name: "Buffale",
      storeName: "stateandstats"
    });;
    // cache keys
    this.statekey = "buffastate"; //Key for storing game state
    this.statuskey = "buffastatus";
    this.statskey = "buffastats";
    this.stampkey = "buffastamp";

    let wod_ts = 5;

    let self = this;
    self.lcldb.getItem(self.stampkey, function(err, stamp) {
      if(wod_ts == stamp) {
        self.lcldb.getItem(self.statuskey, function(err, status) {
          if(status == 'ACTIVE' || status == 'COMPLETE') {
            self.unwindActiveGame();
          }
        });
      } else {
        self.lcldb.setItem(self.stampkey, wod_ts);
        self.lcldb.setItem(self.statuskey, "ACTIVE");
      }
    });
    
  }

  unwindActiveGame() {
    self = this;
    this.lcldb.getItem(this.statekey, function(err, words) {
      if(words.length > 0) {
        for (var i = 0; i < words.length; i++) {
          [...words[i]].forEach(l => self.handleKeyPress(l))
          self.checkWord();
        }
      }
    });
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
      this.game_matix[this.current_row][this.current_col].classList.add("letter-border");
      this.current_col++;
    }
  }

  deleteChar() {
    if(this.current_col > 0) {
      this.current_col--;
      this.game_matix[this.current_row][this.current_col].classList.remove("letter-border");
      this.game_matix[this.current_row][this.current_col].innerHTML = '';
    }
  }

  checkWord() {
    const rowTiles = this.game_matix[this.current_row];
    if(rowTiles.length != 5) {return;}
    let lettersRight = 0;
    this.currentGuess = '';
    for (var i = 0; i < rowTiles.length; i++) {
      const keyboardLetter = document.querySelector('[data-letter="' + rowTiles[i].innerHTML + '"]');
      this.currentGuess += rowTiles[i].innerHTML;
      rowTiles[i].classList.remove("letter-border");
      if(rowTiles[i].innerHTML == this.wordOfDay[i]) {
        keyboardLetter.classList.remove("key-default");
        keyboardLetter.classList.add("correct-key-letter");
        rowTiles[i].classList.add("correct-letter");
        rowTiles[i].classList.add("letterAnimation")
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
    this.allGuesses.push(this.currentGuess);
    this.lcldb.setItem(this.statekey, this.allGuesses);
    let self = this;
    if(lettersRight == 5) {
      document.querySelector("#messages").innerHTML = "YOU WIN!";
      document.querySelector("#game-keyboard").style.display = "none";

      this.lcldb.setItem(this.statuskey, "WON", function() {
        self.endGame();
      });
        
    } else {
      this.lcldb.setItem(this.statuskey, "ACTIVE");
    }

    if(this.current_row >= 5 && lettersRight != 5) {
      this.lcldb.setItem(this.statuskey, "LOST", function() {
        self.endGame();
      });
      
      document.querySelector("#messages").innerHTML = this.wordOfDay.toUpperCase();
      document.querySelector("#game-keyboard").style.display = "none";
    }
  }

  endGame() {
    this.updateStats();
    this.lcldb.setItem(this.statuskey, "COMPLETE");
  }

  updateStats() {
    const self = this;
    this.lcldb.getItem(this.statuskey, function(err, status) {
      if (status == "COMPLETE") {
        return;
      }
      
      self.lcldb.getItem(self.statskey, function(err, obj) {
        if(!obj) {
          obj = {};
        }

        if(status == "WON") {
          if(obj && obj.games_won) {
            let gw = obj.games_won + 1;
            obj.games_won = gw;
          } else {
            obj.games_won = 1;
          }

          if(obj && obj.current_streak) {
            let cs = obj.current_streak + 1;
            obj.current_streak = cs;
          } else {
            obj.current_streak = 1;
          }

          if(obj && obj.max_streak) {
            if (obj.current_streak > obj.max_streak) {
              obj.max_streak = obj.current_streak;
            }
          } else {
            obj.max_streak = 1;
          }

        } else {
          obj.current_streak = 0;
        }
     
        if(obj && obj.games_played) {
          let gp = obj.games_played + 1;
          obj.games_played = gp;
        } else {
          obj.games_played = 1;
        }

        self.lcldb.setItem(self.statskey, obj);
      });
    });
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