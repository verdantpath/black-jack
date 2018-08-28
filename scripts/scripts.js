$(function() {
  function card( name, suit, value ) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
  var deck = [
    new card ('Two', 'Clubs', 2),
    new card ('Three', 'Clubs', 3),
    new card ('Four', 'Clubs', 4),
    new card ('Five', 'Clubs', 5),
    new card ('Six', 'Clubs', 6),
    new card ('Seven', 'Clubs', 7),
    new card ('Eight', 'Clubs', 8),
    new card ('Nine', 'Clubs', 9),
    new card ('Ten', 'Clubs', 10),
    new card ('Jack', 'Clubs', 10),
    new card ('Queen', 'Clubs', 10),
    new card ('King', 'Clubs', 10),
    new card ('Ace', 'Clubs', 11),
    new card ('Two', 'Spades', 2),
    new card ('Three', 'Spades', 3),
    new card ('Four', 'Spades', 4),
    new card ('Five', 'Spades', 5),
  ]
});
