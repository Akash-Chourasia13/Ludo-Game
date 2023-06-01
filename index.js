var p1 = Math.floor(Math.random() * 6) + 1;
var p2 = Math.floor(Math.random() * 6) + 1;
if (p1 > p2) {
	document.querySelector("h1").textContent = "Player 1 Wins!";
} else if (p1 === p2) {
	document.querySelector("h1").textContent = "Draw";
} else {
	document.querySelector("h1").textContent = "Player 2 Wins!";
}
var randomImg1 = "./images/dice" + p1 + ".png";
var randomImg2 = "./images/dice" + p2 + ".png";

document.querySelector("img.img1").setAttribute("src", randomImg1);
document.querySelector("img.img2").setAttribute("src", randomImg2);
