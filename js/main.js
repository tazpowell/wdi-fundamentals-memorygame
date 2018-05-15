console.log("Up and running!");

// array of cards
var cards = [
	{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
	}, 
	{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
	},
	{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
	},
	{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
	}
];

// cards added here after click
var cardsInPlay = []; 

// checks for match
var checkForMatch = function(){
	// checks when two cards are clicked
	if (cardsInPlay.length === 2) {
		// checks if it's a match
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");	
		} else {
			alert("Sorry, try again.");
		}
	}
}

// flips the card that's clicked
var flipCard = function(){
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	// updated image source
	this.setAttribute('src', cards[cardId].cardImage);
	// runs check for match
	checkForMatch();	
}	

// populates four cards to start game
var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		// runs flipCard when user clicks on card
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);

	}
}

// runs createBoard 
createBoard();

// var resetBoard = function(){
// 	for (var i = 0; i < cards.length; i++){
// 		document.getElementById('game-board').removeChild();
// 		// createBoard();
// 	}
// }

// var button = document.querySelector('button');
// button.addEventListener('click', resetBoard);
