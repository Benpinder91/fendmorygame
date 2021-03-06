//array to hold all the values of the cards
const cards = ["fa fa-diamond" , "fa fa-diamond" , "fa fa-paper-plane-o" , "fa fa-paper-plane-o" , "fa fa-anchor" , "fa fa-anchor" , "fa fa-bolt" , "fa fa-bolt" , "fa fa-cube" , "fa fa-cube" , "fa fa-leaf" , "fa fa-leaf" , "fa fa-bicycle" , "fa fa-bicycle" , "fa fa-bomb" , "fa fa-bomb" ];

//call the function shuffle to shuffle list of cards
shuffle(cards);

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(cards) {
    var currentIndex = cards.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }

    return cards;
}

//empty array to store clicked card
let openCard = [];
//empty array to stored matched cards
let matchedCards =[];

//create card continer to hold the cards
const cardContainer = document.querySelector(".deck");
 /*
 * Start the game
 * */
// function to create the cards
function start(shuffle){
//loop though each card in the cards array untill reaching end of the array
for(let i = 0; i<cards.length; i++) {
    //creates the cards in the HTML
    const card = document.createElement("li");
    //creates the class in HTML to match that that exist in the CSS
    card.classList.add("card");
    //add the icons style to each card
    card.innerHTML = `<i class = "${cards[i]}"><i/>`;
    //add new element to card container
    cardContainer.appendChild(card); 
    //add click event to each card in loop
    click(card);
    }
}

/*
*Click Event
*/
//function to hold the click event
function click(card){
//add event listner to the card 
card.addEventListener("click", function(){
    const currentCard = this;
    const previousCard = openCard[0];
    //when card is clicked adds css for an open card
        //a card is already open execute if
        if(openCard.length === 1 ) {
            //adds the css of an open card to card to show it as open
            card.classList.add("open" , "show" , "disable");
            //pushes the open card to the empty array
            openCard.push(this);
            //comapare the opened cards
            compare(currentCard , previousCard);
        // if no card has been opened execute else
        }else{
            currentCard.classList.add("open" , "show", "disable");
            openCard.push(this);
        }
    });
}

/*
*compare function
*/ 
function compare(currentCard , previousCard){
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
        //add delay to action so to reveal 2nd card that does not match
        setTimeout(function(){
            //remove css style if card does not match
            currentCard.classList.remove("open" , "show" , "disable");
            previousCard.classList.remove("open" , "show" , "disable");
        },700);
        openCard =[];   
    }
    //add move
    addMove();
    }

// move counter
const movesContainer = document.querySelector(".moves");
let moves = 0;
movesContainer.innerHTML = 0;
function addMove(){
    moves++;
    movesContainer.innerHTML = moves;
    rating();
}

//function that is called when the game is over
function isOver (){
    if(matchedCards.length === cards.length) {
    }
    setTimeout(function(){
        //remove css style if card does not match
        if(matchedCards.length === cards.length) 
            alert("you win");
        },0);
}
//function called when referesh button is clicked
function refresh(){
//refresh gamne
const refreshBtn = document.querySelector (".restart");
refreshBtn.addEventListener("click" , function(){
//delete all cards
cardContainer.innerHTML = "";
shuffle(cards);
//call start()
start();
//reset any related variables
openCard = [];
matchedCards =[];
moves = 0;
movesContainer.innerHTML = moves;
starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>`;
});
}

//star rating
const starsContainer =document.querySelector (".stars");
starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>
<li><i class="fa fa-star"></i></li>`;
function rating(){
    switch (moves){
         case 12:  starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>`;
         break;

         case 9: starsContainer.innerHTML = `<li><i class="fa fa-star"></i></li>
         <li><i class="fa fa-star"></i></li>`;
         break;
    }
}

//Start game for first time
start();
// refresh to play game again
refresh();