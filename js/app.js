/*
 * Create a list that holds all of your cards
 */
//array to hold all the values of the cards
 const cards = ["fa fa-diamond" , "fa fa-diamond" , "fa fa-paper-plane-o" , "fa fa-paper-plane-o" , "fa fa-anchor" , "fa fa-anchor" , "fa fa-bolt" , "fa fa-bolt" , "fa fa-cube" , "fa fa-cube" , "fa fa-leaf" , "fa fa-leaf" , "fa fa-bicycle" , "fa fa-bicycle" , "fa fa-bomb" , "fa fa-bomb" ];

 


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
/*
//call the function shuffle to shuffle list of cards
 shuffle(cards);
*/

//create card continer to hold the cards
 const cardContainer = document.querySelector(".deck");

 //open array to store clicked card
 let openCard = [];
 let matchedCards =[];
 
// create the cards
 //loop though each card in the cards array untill reaching end of the array
 for(let i = 0; i<cards.length; i++) {
    //creates the cards in the HTML
    const card = document.createElement("li");
    // creates the class in HTML to match that that exist in the CSS
    card.classList.add("card");
    // add the icons style to each card
    card.innerHTML = `<i class = "${cards[i]}"><i/>`;
    //add new element to card container
    cardContainer.appendChild(card);

//add event listner to the card 
card.addEventListener("click", function(){

    const currentCard = this;
    const previousCard = openCard[0];
    //when card is clicked adds css for an open card
        // a card is already open execute if
        if(openCard.length === 1 ) {
            //create variables to be used in if/else
            

            //adds the css of an open card to card to show it as open
            card.classList.add("open" , "show");
            // pushes the open card to the empty array
            openCard.push(this);
            //comapare the opened cards
            if(currentCard.innerHTML === previousCard.innerHTML) {
                //uses css class match and adds it to 1st/2nd clicked card if they both match
                currentCard.classList.add("match");
                previousCard.classList.add("match");
                //adds matched cards to matched cards array
                matchedCards.push(currentCard, previousCard);
                //reset openCard to empty
                openCard =[];
                //check if all cards are matched
                isOver();

            
            }else{
                //reomve css style if card does not match
                currentCard.classList.remove("open" , "show");
                previousCard.classList.remove("open" , "show");
                openCard =[];
            }

        // if no card has been opened execute else
        }else{
            currentCard.classList.add("open" , "show");
            openCard.push(this);
        }
    });

  }

//function that is called when the game is over
function isOver (){
    if(matchedCards.length === cards.length) {
        alert("you win");
    }

}

/*
//attaches card holdind div to document body after cards shuffled and created to document
document.body.appendChild(cardTemp);
}
*/

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
