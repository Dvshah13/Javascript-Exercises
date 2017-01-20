// TDD portion
//
// You will implement the rest of these exercises using Test-Driven Development.
//
// Card Constructor

// 1. Create a constructor Card. A card object will have 2 properties:
function Card(point,suit) {
    this.point = point;
    this.suit = suit;
}

// getImageUrl()
//
// Add a getImageUrl method to card objects by adding it as a property to Card.prototype. The method should return the URL path to the png image file for the card.
function Card(point,suit) {
    this.point = point;
    this.suit = suit;
}

Card.prototype.getImageUrl = function() {
    return url_path;
}

// Hand constructor

// A hand is simply represented as a collection of cards, but it would also be convenient for a hand to be able to return it's point value. We would like to be able to do this with a Hand constructor:
function Hand() {
    this.cards = []
}

Hand.prototype.addCard = function(card){
    this.cards(card);
};

Hand.prototype.getPoints = function(){
    return card.point1 + card.point2;
}

// Deck constructor
//
// A deck is also represented as a collection of cards, but it would also be convenient for it to be able to shuffle itself, and be asked to draw a card. We would like to be able to do this with a Deck constructor:
function Deck() {

}
Deck.prototype.draw = function() {
    this.deck = [];
}
