"use strict";
// A Game of Trash
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
var cardToId = function cardToId(card) {
  return flattener[card.suit()] * 13 + card.rank();
};
// returns a card from a standard deck of 52 cards
var card = function card(suit, rank) {
  var s = suit, r = rank;
  if (!isValidSuit(s)) {
    throw {
      name: 'TypeError',
      message: 'suit: ' + s + ' is invalid'
    };
  }
  if (!isValidRank(r)) {
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
// every card has an id starting at 1 and ending at 52 and
// there is a card for every id
var idToCard = function idToCard(id) {
  var quo, rem;
  if (typeof id !== 'number' || id < 1 || id > 52) {
    throw {
      name: 'RangeError',
      message: 'id: ' + id + ' not in the range: [1, 52]'
    };
  }
  quo = parseInt(id / 13, 10);
  rem = id % 13;
  return card(unflattener[rem === 0 ? quo - 1 : quo], rem === 0 ? rem + 13 : rem);
};
// returns a player
var player = function player(name) {
  var cards = [], // my cards, all indexed
    cardPositions = [], // and their positions, 'up' or 'down'
    pickupPile,
    discardPile,
    setOnce = false;
  return {
    getName: function () {
      return name;
    },
    deal: function deal(card) {
      cards.push(card);
    },
    setPiles: function (p, d) {
      if (!setOnce) {
        pickupPile = p;
        discardPile = d;
        setOnce = true;
      } else {
        throw {
          name: 'AlreadySetError',
          message: 'Piles were already set before for: ' + this.getName()
        };
      }
    },
    autoPlay: function autoPlay() {
      throw {name: "NYI"};
    },
    make: function make(move) {
      throw {name: "NYI"};
    },
    hasWon: function hasWon() {
      return cardPositions.length === cards.length;
    },
    getPickupPileSize: function () {
      return pickupPile.length;
    },
    getDiscardPileSize: function () {
      return discardPile.length;
    },
    getNumberOfCards: function () {
      return cards.length;
    },
    getNumberOfCardsFaceUp: function () {
      return cardPositions.length;
    }
  };
};
// a function to simulate shuffling of cards
var shuffle = function shuffle(n) {
  var i, j, temp, array = [];
  for (i = 0; i < n; i += 1) {
    array[i] = i + 1;
  }
  // Fisher-Yates
  for (i = array.length - 1; i > 0; i -= 1) {
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
var deal = function deal(player1, player2, cardIds, n, discardPile) {
  var i, pickupPile = [];
  if (cardIds.length < (2 * n)) {
    throw {
      name: 'InvalidDeck',
      message: 'Invalid cardIds array length -- required:(' + 2 * n + '), found: (' + cardIds.length + ')'
    };
  }
  for (i = 1; i <= n; i += 1) {
    player1.deal(idToCard(cardIds.shift()));
    player2.deal(idToCard(cardIds.shift()));
  }
  // form a pickupPile and return it
  for (i = 0; i < cardIds.length; i += 1) {
    pickupPile.push(idToCard(cardIds[i]));
  }
  player1.setPiles(pickupPile, discardPile);
  player2.setPiles(pickupPile, discardPile);
  return pickupPile;
};
// returns a game that has a pickupPile, a discardPile and two players
// the caller can then start the game which continues till a player has won 
// players take turn
// the game starts in a non-won state and a player can win after her/his turn
var game = function game(name1, name2) {
  var player1, player2, current_player, shuffled, pickupPile, discardPile = [];
  return {
    begin: function begin() {
      shuffled = shuffle(52);
      player1 = player(name1);
      player2 = player(name2);
      pickupPile = deal(player1, player2, shuffled, 10, discardPile);
      current_player = player1;
      while (true) {
        current_player.play(pickupPile, discardPile);
        if (current_player.hasWon()) {
          return current_player;
        }
        current_player = current_player === player1 ? player2 : player1;
      }
    }
  };
};
//game().begin();

