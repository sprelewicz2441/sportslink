'use strict';
import Game from './Game.js';

window.addEventListener('DOMContentLoaded', (event) => {
  const game = new Game();
});

document.querySelector("#close-stats-modal").addEventListener('click', (event) => {
  document.querySelector("#stats-overlay").style.display = 'none';
});