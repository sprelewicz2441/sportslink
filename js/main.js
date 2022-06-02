'use strict';
import Game from './Game.js';

let game;
window.addEventListener('DOMContentLoaded', (event) => {
  game = new Game();
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

document.querySelector("#copy-btn").addEventListener('click', (event) => {
  const textToCopy = document.querySelector('#copy-content').innerText;
  navigator.clipboard.writeText(textToCopy).then(
    function() {
      /* clipboard successfully set */
      game.flashAlertNotice('Copied to clipboard');
    }, 
    function() {
      /* clipboard write failed */
      game.flashAlertNotice('browser does not support this')
    }
  );
});