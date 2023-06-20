var location1 = 3;
var location2 = 4;
var location3 = 5;
var hits = 0;
var guess;
var guesses = 0;
var isSunk = false;
while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
    if (guess < 0 || guess > 6) {
        alert("Please enter a valid cell number!");
    } else {
        guesses = guesses + 1;
        if (guess == location1);
        hits = hits + 1;
        alert("HIT!");
        else if (guess == location2);
        hits = hits + 1;
        alert("HIT!");
        else if (guess == location3);
        hits = hits + 1;
        alert("HIT!");{
        if (hits == 3)
            isSunk = true;
            alert("You sank my battleship!");
         } else {
            alert("MISS!");
         }
    }
}
var stats = "You took " + guesses + " guesses to sink the battleship, " + 
                "which means your shooting accuracy was " + ((3/guesses)*100 + " % ");
alert(stats);