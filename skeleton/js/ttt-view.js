class View {
  constructor(game, $el) {
    this.game = game
    this.$el = $el

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    //el.on(click, e => {
    // conts $somehing = $(e.currentTarget);
    // alert($something.attr("datapos")) }
    this.$el.on('click', 'li',(e => {
      const $square = $(e.currentTarget);
      this.makeMove($square);

    }));
  }

  makeMove($square) {
    const position = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid Move! Try again.");
      return;
    }

    $square.addClass(currentPlayer);

    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass('winner-${winner}');
        $figcaption.html('You win, ${winner}');
      } else {
        $figcaption.html("it's a draw!");
      }

      this.$el.append($figcaption);
    }
  }

  setupBoard() {
    const $ul = $('<ul>');
    $ul.addClass('group');

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $('<li>');
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }
    this.$el.append($ul);
  }
}

module.exports = View;
