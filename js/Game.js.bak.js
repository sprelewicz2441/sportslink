
export default class Game {
  constructor() {
    const keyboard_wrapper = document.querySelector("#game-keyboard");
    this.setupKeyboard(keyboard_wrapper);
    this.game_matix = this.setupGameboard(document.querySelector("#game-board"));
    this.current_row = 0;
    this.current_col = 0;
    this.currentGuess = '';
    this.game_status = '';
    this.allGuesses = [];
    this.wordOfDay = "diggs";
    this.game_hint = "Bills";
    this.alert_box = document.querySelector("#alerts");

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
    this.from_cache_complete = false;  //Flag to see if game was loaded from cache

    let wod_ts = 215;

    let self = this;
    self.lcldb.getItem(self.stampkey, function(err, stamp) {
      if(wod_ts == stamp) {
        self.lcldb.getItem(self.statuskey, function(err, status) {
          self.game_status = status;
          self.from_cache = true;
          if(status == 'ACTIVE' || status == 'COMPLETE') {
            if(status == "COMPLETE") {
              self.from_cache_complete = true;
            }
            self.unwindActiveGame();
          }
        });
      } else {
        self.lcldb.setItem(self.stampkey, wod_ts);
        self.lcldb.setItem(self.statekey, []);
        self.game_status = "ACTIVE";
        self.lcldb.setItem(self.statuskey, "ACTIVE");
      }
    });

    this.init();
  }

  init() {
    const self = this;
    this.lcldb.getItem(self.statskey, function(err, obj) {
      if(!obj) {
        obj = {};
      }
      self.games_played = obj.games_played || 0;
      self.games_won = obj.games_won || 0;
      self.current_streak = obj.current_streak || 0;
      self.max_streak = obj.max_streak || 0;
      self.guess_dist = obj.guess_dist || [];
      self.populateStatsOverlay();
      if(self.games_played == 0) {
        self.showHelpOverlay();
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

  flashAlertNotice(alert) {
    this.alert_box.innerHTML = alert;
    this.alert_box.style.display = "block";
    setTimeout(() => {
      this.alert_box.style.display = "none";
    }, "1500")
  }

  showHint() {
    const hint_btn = document.querySelector("#hint-btn");
    hint_btn.style.display = "block";
    let self = this;
    hint_btn.addEventListener("click", function(e) {
      self.flashAlertNotice(self.game_hint);
    });
  }

  checkWord() {
    const rowTiles = this.game_matix[this.current_row];

    if(this.current_col < 5) {
      this.flashAlertNotice("Not enough letters");
      return;
    }
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
    if(lettersRight == 5) {
      document.querySelector("#messages").innerHTML = "";
      document.querySelector("#game-keyboard").style.display = "none";
      if(this.game_status != "COMPLETE") {
        this.game_status = "WIN";
      }
      this.endGame();
    } else {
      this.game_status = "ACTIVE";
    }

    if(this.current_row >= 3) {
      this.showHint();
    }

    if(this.current_row >= 5 && lettersRight != 5) {
      if(this.game_status != "COMPLETE") {
        this.game_status = "LOST";
      }
      this.lcldb.setItem(this.statuskey, this.game_status);
      this.endGame();
      document.querySelector("#messages").innerHTML = this.wordOfDay.toUpperCase();
      document.querySelector("#game-keyboard").style.display = "none";
    }

    this.lcldb.setItem(this.statuskey, this.game_status);
  }

  endGame() {
    if(!this.from_cache_complete) {
      this.updateStats();
    }
    this.populateStatsOverlay();
    this.lcldb.setItem(this.statuskey, "COMPLETE");   
    this.game_status = "COMPLETE";

    let self = this;
    setTimeout(() => {
      self.showStatsOverlay();
    }, "1000")
    
  }

  showHelpOverlay() {
    const overlay = document.querySelector("#help-overlay");
    overlay.style.display = "block";
  }

  showStatsOverlay() {
    const overlay = document.querySelector("#stats-overlay");
    overlay.style.display = "block";
  }

  populateStatsOverlay() {
    const overlay = document.querySelector("#stats-overlay");
    if(this.game_status == "COMPLETE" || this.game_status == "LOST") {
      document.querySelector("#modal-messages").innerHTML = this.wordOfDay;
    }
    if(this.games_played > 0) {
      document.querySelector("#win-percentage").innerHTML = Math.round((this.games_won/this.games_played)*100) + '% Wins';
    }
    document.querySelector("#games_played").innerHTML = this.games_played;
    document.querySelector("#games_won").innerHTML = this.games_won;
    document.querySelector("#current_streak").innerHTML = this.current_streak;
    document.querySelector("#max_streak").innerHTML = this.max_streak;
    document.querySelector("#guess-brkdwn-1").innerHTML = this.guess_dist[1] || 0;
    document.querySelector("#guess-brkdwn-2").innerHTML = this.guess_dist[2] || 0;
    document.querySelector("#guess-brkdwn-3").innerHTML = this.guess_dist[3] || 0;
    document.querySelector("#guess-brkdwn-4").innerHTML = this.guess_dist[4] || 0;
    document.querySelector("#guess-brkdwn-5").innerHTML = this.guess_dist[5] || 0;
    document.querySelector("#guess-brkdwn-fail").innerHTML = this.guess_dist['fail'] || 0;
    if(this.game_status == "WIN") {
      //document.querySelector("#copy-btn").style.display = "block";
      document.querySelector("#copy-content").innerHTML = "I got today's Buffale in " + this.allGuesses.length + " guesses. How is your Buffalo Sports knowledge? Try and beat me! www.buffale.com";
    }
  }

  updateStats() {
    console.log(this.game_status);
    if (this.game_status == "COMPLETE") {
      return;
    }
    
    console.log("UPDATING STATS");
    const obj = {};

    if(this.game_status == "WIN") {
      this.games_won += 1;
     

      this.current_streak += 1;
      obj.current_streak = this.current_streak;

      if (this.current_streak > this.max_streak) {
        this.max_streak = this.current_streak;
      }

      if(this.guess_dist[this.current_row]) {
        this.guess_dist[this.current_row] += 1;
      } else {
        this.guess_dist[this.current_row] = 1;
      }
    } else {
      if(this.guess_dist['fail']) {
        this.guess_dist['fail'] += 1;
      } else {
        this.guess_dist['fail'] = 1;
      }

      obj.current_streak = 0;
      this.current_streak = 0;
    }

    obj.games_won = this.games_won;
    obj.max_streak = this.max_streak;

    obj.guess_dist = this.guess_dist;
    this.games_played += 1;
    obj.games_played = this.games_played;

    this.lcldb.setItem(this.statskey, obj);
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