var pickedColor = "";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");

for (var i = 0; i < squares.length; i++) {
	changeColors();
	squares[i].addEventListener("click", function() {			      
		if (pickedColor === this.style.backgroundColor) {
			message.textContent = "Correct";
			for (var x = 0; x < squares.length; x++) {
				squares[x].style.backgroundColor = pickedColor;
			}
			h1.style.backgroundColor = pickedColor;
		}
		else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Wrong :(";
		}
	});
}

function changeColors() {
	var arr = generateRandomColors(6);
	pickedColor = arr[Math.floor(Math.random() * 6)];
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