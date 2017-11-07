const View = require('./ttt-view.js');
const Game = require('../../../jquery_tic_tac_toe/solution/game');

$( () => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);

  // Your code here
});
