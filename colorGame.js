var pickedColor = "";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyButton");
var hardButton = document.querySelector("#hardButton");
var colorAmount = 6;

resetButton.addEventListener("click", function() {
	changeColors(colorAmount);
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";
});

easyButton.addEventListener("click", function() {
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	colorAmount = 3;
	changeColors(colorAmount);
	for (var i = colorAmount; i < squares.length; i++) {
		squares[i].style.display = "none";
	}
});

hardButton.addEventListener("click", function() {
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	colorAmount = 6;
	changeColors(colorAmount);
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.display = "block";
	}
});

for (var i = 0; i < squares.length; i++) {
	changeColors(colorAmount);
	squares[i].addEventListener("click", function() {			      
		if (pickedColor === this.style.backgroundColor) {
			message.textContent = "Correct";
			for (var x = 0; x < squares.length; x++) {
				squares[x].style.backgroundColor = pickedColor;
			}
			h1.style.backgroundColor = pickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong :(";
		}
	});
}

function changeColors(num) {
	var arr = generateRandomColors(num);
	pickedColor = arr[Math.floor(Math.random() * num)];
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = arr[i];
	}
}

function generateRandomColors(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {	
		arr.push(randomColor());
	}

	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}