// suit: one of 'spades', 'hearts', 'diamonds', 'clubs'
var isValidSuit = function isValidSuit(suit) {
  return suit === 'spades' || suit === 'hearts' || suit === 'clubs' || suit === 'diamonds';
};
// rank: [1, 13]: 1 for ace, 11, 12, 13 for jack, queen and king respectively
var isValidRank = function isValidRank(rank) {
  return typeof rank === 'number' && rank >= 1 && rank <= 13;
};
var card = function card(suit, rank) {
  var s = suit, r = rank;
  if (! isValidSuit(s)) {
    throw {
      name: 'TypeError',
      message: 'suit: ' + s + ' is invalid'
    };
  }
  if (! isValidRank(r)) {
    throw {
      name: 'TypeError',
      message: 'rank: ' + r + ' is invalid'
    };
  }
  return {
    suit: function suit() {
      return s;
    },
    rank: function rank() {
      return r;
    }
  };
}
var player = function player(name) {
  return {
    play: function play() {
    },
    hasWon: function hasWon() {
    }
  };
};
// returns a game that has a pickupPile, a discardPile and two players
// the caller can then start the game which continues till a player has won 
// players take turn
// the game starts in a non-won state and a player can win after her/his turn
var game = function game(name1, name2) {
  var player1, player2, current_player;
  return {
    begin: function begin() {
      //deal
      player1 = player(name1);
      player2 = player(name2);
      current_player = player1;
      while (true) {
        current_player.play();
        if (current_player.hasWon()) {
          return current_player;
        }
        current_player = current_player === player1 ? player2 : player1;
      }
    }
  };
};
game().begin();
