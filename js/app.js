/*
 * Create a list that holds all of your cards
 */
 const cards = [diamond , paper-plane , anchor , bolt , cube , anchor , leaf , bicycle , diamond , bomb , leaf , bomb , bolt , bicycle , paper-plane , cube];
 


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
//call the function shuffle to shuffle list of cards
 shuffle(cards);
//create tempory div to hold all the cards in while they are created 
 const cardTemp = document.createElement ('div');
 //loop though each card in the cards array
 for(const card of cards) {
//creates a new list item for each card in cards array
let newElement = document.createElement('li');
//add the css associated to each list item created (font awesome)
let cardContent =  document.innerHTML = '<i class="fa fa-[]"></i>';
//add new element to card holding div
cardTemp.appendChild(newElement);
//attaches card holdind div to document body after cards shuffled and created to document
document.body.appendChild(cardTemp);
}


// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
