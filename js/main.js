'use strict';
import Game from './Game.js';

window.addEventListener('DOMContentLoaded', (event) => {
  const game = new Game();
});

document.querySelector("#close-stats-modal").addEventListener('click', (event) => {
  document.querySelector("#stats-overlay").style.display = 'none';
});

document.querySelector("#open-stats-btn").addEventListener('click', (event) => {
  document.querySelector("#stats-overlay").style.display = 'block';
});

document.querySelector("#close-help-modal").addEventListener('click', (event) => {
  document.querySelector("#help-overlay").style.display = 'none';
});

document.querySelector("#open-help-btn").addEventListener('click', (event) => {
  document.querySelector("#help-overlay").style.display = 'block';
});