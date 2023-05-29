var randomNumber1 = Math.floor(Math.random() *6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png" ;
var randomimagesource = "images/"+ randomDiceImage ;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomimagesource); 


var randomNumber2 = Math.floor(Math.random()*6) +1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;
var randomimagesource2 = "images/dice" + randomNumber2 + ".png"  ;
document.querySelectorAll("img")[1].setAttribute("src", randomimagesource2);
image1.setAttribute("src", randomimagesource);


if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins !"
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}