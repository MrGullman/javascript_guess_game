// Startar spelet genom att fråga spelaren vilket som den vill skall vara högsta nummret
var ownTopNumber = parseInt(prompt("Vilket är högsta nummret?"));

// Välj hur många försök man behöver på sig
var diffeculty = parseInt(prompt("Hur många försök vill du ha på dig?"));


// deklarerar variablerna
var upperNumber = ownTopNumber;
var randomNumber = getRandomNumber(upperNumber);
var guess;
var attempt = 0;
var numTry = diffeculty;


// en funktion som skapar ett random nummer
function getRandomNumber(upperNumber){
  return Math.floor(Math.random() * upperNumber ) +1;
}



// kod för att lättare kunna gissa rätt nummer när man utvecklar
/*console.log(typeof ownTopNumber);

console.log(randomNumber);
console.log(typeof numTry);*/



// while loop som fortsätter att köra tills att man har gissar rätt

while (guess !== randomNumber && numTry > 0){
  
  // Antalet försök man har på sig
  numTry -=1;
  
  
  guess = parseInt(prompt("Gissa ett nummer mellan 1 & " + upperNumber));
  
  if(guess === randomNumber){
    alert("Grattis det va rätt");
    //console.log("Grattis det va rätt");
  }else if(guess < randomNumber){
    alert("Talet är större!, du har " + numTry + " försök kvar.");
    //console.log("talet är större");
  }else{
    alert("Talet är mindre!, du har " + numTry + " försök kvar.");
    //console.log("Talet är mindre!");
  }
 
  // Loggar hur många försök man har behövt på sig.
  attempt += 1;
  
  
  /*console.log("Antal försök: " + numTry);*/

}
 


// Här kollar vi om det är försöken som är slut eller om du hade rätt.

//console.log("Antal försök: " + numTry);
if(numTry > 0){
  alert("Kanon du gissade rätt. Du behövde " + attempt + " försök för att gissa rätt.");
//console.log(attempt);
}else{
  alert("Tyvärr du förlorade du har inga fler försök.");
}




