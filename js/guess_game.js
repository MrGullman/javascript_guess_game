var ownNumber = parseInt(prompt("Vilket är högsta nummret?"));

// deklarerar variablerna
var upperNumber = ownNumber;
var randomNumber = getRandomNumber(upperNumber);
var guess;
var attempt = 0;


// en funktion som skapar ett random nummer med
function getRandomNumber(upperNumber){
  return Math.floor(Math.random() * upperNumber ) +1;
}


console.log(typeof ownNumber);
//guess;
//console.log(guess);
console.log(randomNumber);

while (guess !== randomNumber){
  guess = parseInt(prompt("Gissa ett nummer mellan 1 & " + upperNumber));//getRandomNumber(upperNumber);
  
  if(guess === randomNumber){
    alert("Grattis det va rätt");
    console.log("Grattis det va rätt");
  }else if(guess < randomNumber){
    alert("Talet är större!");
    console.log("talet är större");
  }else{
    alert("Talet är mindre!");
    console.log("Talet är mindre!");
  }
  attempt += 1;
}

console.log(attempt);
//alert("Välkommen till Jespers Nummergissnings Spel");



//annars visar det fel