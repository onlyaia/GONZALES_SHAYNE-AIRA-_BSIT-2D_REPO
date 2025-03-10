console.log("test");

var location =3;
var location =4;
var location =5;


var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;


// Game Logic

while(isSunk == false) {
    guess = prompt("Ready!, Aim!, Firee!,  (Enter number 0-60") ;

    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!")
    }else {
        guesses = guesses + 1;

 if (guess == location1 || guess == location2 || guess == location3) {
            hits = hits + 1;

            if (hits ==3) {
                isSunk = true;
                alert("You sunk my battleship")
           
            }

         }
                  
         }
}
var stats = "You sunk my batlleship at "+" guesses, " +"You accuracy is:" + (3/guesses);
alert(stats);
