$(function() {
  function card( name, suit, value ) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
  var deck = [
    new card('Two', 'Clubs', 2)
  ]
});
