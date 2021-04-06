

var player1= Math.floor(Math.random()*6) + 1;
var player2= Math.floor(Math.random()*6) + 1;



var randomDiceImg1= "dice"+player1+".png";
var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImg1);



var randomDiceImg2= "dice"+player2+".png";
var image2= document.querySelectorAll("img")[1];

image2.setAttribute("src", randomDiceImg2);

if(player1>player2){
  document.querySelector("h1").innerHTML= "🚩 Player 1 Wins" ;
}
else if(player1<player2){
  document.querySelector("h1").innerHTML= "Player 2 Wins 🚩";
}

else{
  document.querySelector("h1").innerHTML= "It's a draw 🙆🏻‍♂️";
}
