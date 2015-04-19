// suit: one of 'spades', 'hearts', 'diamonds', 'clubs'
var is_valid_suit = function is_valid_suit(suit) {
  return suit === 'spades' || suit === 'hearts' || suit === 'clubs' || suit === 'diamonds';
};
// rank: [1, 13]: 1 for ace, 11, 12, 13 for jack, queen and king respectively
var is_valid_rank = function is_valid_rank(rank) {
  return typeof rank === 'number' && rank >= 1 && rank <= 13;
};
var card = function card(suit, rank) {
  var s = suit, r = rank;
  if (! is_valid_suit(s)) {
    throw {
      name: 'TypeError',
      message: 'suit: ' + s + ' is invalid'
    };
  }
  if (! is_valid_rank(r)) {
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
  return {};
}
console.log(card('spades', 2).rank());
