var randomNumber1 = Math.floor(Math.random()*6) + 1;
var imagesrandomsource = "./images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesrandomsource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var imagesrandomsource2 = "./images/dice"+randomNumber2+".png";
var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src",imagesrandomsource2);

if ( randomNumber1 > randomNumber2 ){
   document.querySelector("h1").innerHTML = " PLAYER 1 WIN ";
}   
else if( randomNumber2 > randomNumber1 )
{
    document.querySelector("h1").innerHTML = " PLAYER 2 WIN ";
}
else{
    document.querySelector("h1").innerHTML = " DRAW!!!";
}





