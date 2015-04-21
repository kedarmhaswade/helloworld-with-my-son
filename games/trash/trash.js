// suit: one of 'spades', 'hearts', 'diamonds', 'clubs'
var isValidSuit = function isValidSuit(suit) {
  return suit === 'spades' || suit === 'hearts' || suit === 'clubs' || suit === 'diamonds';
};
// rank: [1, 13]: 1 for ace, 11, 12, 13 for jack, queen and king respectively
var isValidRank = function isValidRank(rank) {
  return typeof rank === 'number' && rank >= 1 && rank <= 13;
};
var flattener = {spades: 0, hearts: 1, clubs: 2, diamonds: 3};
var unflattener = {0: 'spades', 1: 'hearts', 2: 'clubs', 3: 'diamonds'};
var cardToId = function flatten(card) {
  return flattener[card.suit()] * 13 + card.rank();
};
var idToCard = function unflatten(id) {
  if (id < 1 || id > 52) {
    throw {
      name: 'RangeError',
      message: 'id: ' + id + ' not in the range: [1, 52]'
    };
  }
  var quo = parseInt(id/13), rem = id % 13;
  return card(unflattener[rem === 0 ? quo - 1 : quo], rem === 0 ? rem + 13 : rem);
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
    },
    toString: function toString() {
      return r + ' of ' + s + ' (id: ' + cardToId(this) + ')';
    }
  };
};
var player = function player(name) {
  var cards = []; // my cards, all indexed
  var cardPositions = []; // and their positions, 'up' or 'down'
  return {
    deal: function deal(card) {
      cards.push(card);
    },
    play: function play() {
    },
    hasWon: function hasWon() {
    }
  };
};
var shuffle = function shuffle(n) {
  var i, j, temp, array = [];
  for (i = 0; i < n; i += 1) {
    array[i] = i + 1;
  }
  // Fisher-Yates
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};
// deals n cards from the cardIds and returns the remaining cardIds
// cardIds.length may not be less than 2*n
// returns the pickupPile
var deal = function deal(player1, player2, cardIds, n) {
  var i, pickupPile = [];
  if (cardIds.length < (2 * n)) {
    throw {
      name: 'InvalidDeck',
      message: 'Invalid cardIds array length -- required:(' + 2*n + '), found: (' + cardIds.length';
    };
  }
  for (i = 1; i <= n; i += 1) {
    player1.deal(idToCard(cardIds.shift()));
    player2.deal(idToCard(cardIds.shift()));
  }
  // form a pickupPile and return it
  for (i = 0; i < cardIds.length; i += 1) {
    pickupPile.push(idToCard(cardIds.shift());
  }
  return pickupPile;
};
// returns a game that has a pickupPile, a discardPile and two players
// the caller can then start the game which continues till a player has won 
// players take turn
// the game starts in a non-won state and a player can win after her/his turn
var game = function game(name1, name2) {
  var player1, player2, current_player, seq;
  return {
    begin: function begin() {
      shuffled = shuffle(52);
      player1 = player(name1);
      player2 = player(name2);
      deal(player1, player2, shuffled, 10);
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
(function printAll() {
  for (var i = 1; i <= 52; i += 1) {
    console.log(idToCard(i).toString());
  }
})();
//game().begin();

