var p1 = prompt('Enter Player 1 name');
var p2 = prompt('Enter Player 2 name');

function fun1() {
    var number = Math.floor(Math.random() * 6) + 1;
    var image = "dice" + number + ".png";
    var imageSource1 = "images/" + image;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", imageSource1);


    var number2 = Math.floor(Math.random() * 6) + 1;
    var imageSource2 = "images/dice" + number2 + ".png";

    document.querySelectorAll("img")[1].setAttribute("src", imageSource2);


    if (number > number2) {
        document.querySelector("h1").innerHTML = p1 + " Wins!! 🚩";
    } else if (number2 > number) {
        document.querySelector("h1").innerHTML = p2 + " Wins!! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "Draw!";
    }
}