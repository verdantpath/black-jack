$(function() {
  // create the cards
  function card( name, suit, value ) {
    this.name = name;
    this.suit = suit;
    this.value = value;
  }
  // build the deck of cards and assign them values
  var deck = [
    new card('Two', 'Clubs', 2),
    new card('Three', 'Clubs', 3),
    new card('Four', 'Clubs', 4),
    new card('Five', 'Clubs', 5),
    new card('Six', 'Clubs', 6),
    new card('Seven', 'Clubs', 7),
    new card('Eight', 'Clubs', 8),
    new card('Nine', 'Clubs', 9),
    new card('Ten', 'Clubs', 10),
    new card('Jack', 'Clubs', 10),
    new card('Queen', 'Clubs', 10),
    new card('King', 'Clubs', 10),
    new card('Ace', 'Clubs', 11),
    new card('Two', 'Spades', 2),
    new card('Three', 'Spades', 3),
    new card('Four', 'Spades', 4),
    new card('Five', 'Spades', 5),
    new card('Six', 'Spades', 6),
    new card('Seven', 'Spades', 7),
    new card('Eight', 'Spades', 8),
    new card('Nine', 'Spades', 9),
    new card('Ten', 'Spades', 10),
    new card('Jack', 'Spades', 10),
    new card('Queen', 'Spades', 10),
    new card('King', 'Spades', 10),
    new card('Ace', 'Spades', 11),
    new card('Two', 'Hearts', 2),
    new card('Three', 'Hearts', 3),
    new card('Four', 'Hearts', 4),
    new card('Five', 'Hearts', 5),
    new card('Six', 'Hearts', 6),
    new card('Seven', 'Hearts', 7),
    new card('Eight', 'Hearts', 8),
    new card('Nine', 'Hearts', 9),
    new card('Ten', 'Hearts', 10),
    new card('Jack', 'Hearts', 10),
    new card('Queen', 'Hearts', 10),
    new card('King', 'Hearts', 10),
    new card('Ace', 'Hearts', 11),
    new card('Two', 'Diamonds', 2),
    new card('Three', 'Diamonds', 3),
    new card('Four', 'Diamonds', 4),
    new card('Five', 'Diamonds', 5),
    new card('Six', 'Diamonds', 6),
    new card('Seven', 'Diamonds', 7),
    new card('Eight', 'Diamonds', 8),
    new card('Nine', 'Diamonds', 9),
    new card('Ten', 'Diamonds', 10),
    new card('Jack', 'Diamonds', 10),
    new card('Queen', 'Diamonds', 10),
    new card('King', 'Diamonds', 10),
    new card('Ace', 'Diamonds', 11)
  ]

  var hand = {
    cards: new Array(),
    current_total: 0,
    sumCardTotal: function() {
      this.current_total = 0;
      for ( var i = 0; i < this.cards.length; i++ ) {
        this.current_total = this.current_total + this.cards[i].value; //might need to alter this
      }
      $('#hdrTotal').append(this.current_total);
      if (this.current_total > 21) {
        $('#btnStick').trigger('click');
        $('#hdrResult').html('BUST!');
      } else if (this.current_total == 21) {
        $('#btnStick').trigger('click');
        $('#hdrResult').html('BlackJack!');
      } else if (this.current_total <= 21 && this.cards.length == 5) {
        $('#btnStick').trigger('click');
        $('#hdrResult').html('5 card trick');
      } else {
        // keep playing
      }
    }
  };

  // create an array to hold the used cards
  var used_cards = new Array();

  // start out by dealing 2 cards
  function deal() {
    for(var i = 0; i < 2; i++) {
      hit();
    }
  }
  function getRandom(num) {
    var my_num = Math.floor(Math.random() * num);
    return my_num;
  }
  function hit() {
    var good_card = false;
    do {
      var index = getRandom(52);
      if ( !$.inArray(index, used_cards) > -1 ) {
        good_card = true;
        var c = deck[index];
        used_cards[used_cards.length] = index;
        //hand.cards[hand.cards.length] = c;
        var $d = $("<div>");
        $d.addClass("current_hand").appendTo("#my_hand");
        $('<img>').appendTo($d).attr("src", 'images/cards/' + c.suit + '/' + c.name + '.jpg').fadeOut('slow').fadeIn('slow');
      }
    } while(!good_card);
    good_card = false;
  }
  $("#btnDeal").click(function() {
    deal();
    $(this).toggle();
  });

});
