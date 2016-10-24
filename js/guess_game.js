var playAgain = true;

while(playAgain){

// Startar spelet genom att fråga spelaren vilket som den vill skall vara högsta nummret
var ownTopNumber = parseInt(prompt("Vilket är högsta nummret?"));

// Välj hur många försök man behöver på sig

var diffeculty = parseInt(prompt("Välj Svårighetsgrad mellan 1 - 5, var 1 är lättast."));
  
// Kollar om diffeculty är mellan 1-5
while (diffeculty !== 1 && diffeculty !== 2 && diffeculty !== 3 && diffeculty !== 4 && diffeculty !== 5){
  diffeculty = parseInt(prompt("Välj en svårighet mellan 1 - 5"));
}

// deklarerar variablerna
var upperNumber = ownTopNumber;
var randomNumber = getRandomNumber(upperNumber);
var guess;
var attempt = 0;
var numTry = setNumberOfTries(diffeculty);


// Funktion för att sätta antalet försök baserat på svårighetsgrad.
function setNumberOfTries(diffeculty){
  var numTry = 20;
  
  switch(diffeculty) {
    case 1:
      numTry = 20;
      break;
    case 2:
      numTry = 15;
      break;
    case 3:
      numTry = 10;
      break;
    case 2:
      numTry = 6;
      break;
    case 5:
      numTry = 3;
      break;
    default:
      console.log("Du måste välja ett värde mellan 1-5");
  }
  
  return numTry;
}


// en funktion som skapar ett random nummer
function getRandomNumber(upperNumber){
  return Math.floor(Math.random() * upperNumber ) +1;
}



// kod för att lättare kunna gissa rätt nummer när man utvecklar
console.log(typeof ownTopNumber);

console.log(randomNumber);
console.log(typeof numTry);

// Tar bort ett försök för det första försöket man gör.


// while loop som fortsätter att köra tills att man har gissar rätt

while (guess !== randomNumber && numTry > 0){
  
  // Antalet försök man har på sig
  numTry -=1;
  
  guess = parseInt(prompt("Gissa ett nummer mellan 1 & " + upperNumber));
  
  if(guess === randomNumber){
    alert("Grattis det va rätt");

  }else if(guess < randomNumber){
    if(numTry>0){
      alert("Talet är större!, du har " + numTry + " försök kvar.");
    }else{
      alert("Dina försök är slut.")
    }
  }else{
    if (numTry>0){
      alert("Talet är mindre!, du har " + numTry + " försök kvar.");
    }else{
      alert("Dina försök är slut.")
    }
  }
 
  // Loggar hur många försök man har behövt på sig.
  attempt += 1;
  
}
 
// Här kollar vi om det är försöken som är slut eller om du hade rätt.

if(numTry > 0){
  alert("Kanon du gissade rätt. Du behövde " + attempt + " försök för att gissa rätt.");
}else{
  alert("GAME OVER! Rätt tal va: " + randomNumber);
}

var again = prompt("Vill Du Spela Igen: Y / N");

  if(again === "Y"){
    playAgain = true;
  }else{
    playAgain = false;
  }
}



/*

var getValue = document.getElementById("submit");



function f1 (){
  var x = document.getElementById("firstName").value;
  console.log("Värdet är " + x);
  document.getElementById("text").innerHTML = x + " Detta verkar fungera!";
}



getValue.onclick = f1;

*/