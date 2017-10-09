var pickedColor = "";
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".gameMode");
var colorAmount = 6; //starting number

//loop through the squares and add interactions when clicking squares
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

//add interactions to Easy and Hard Difficulties and modify the square amount displayed
for (var i = 0; i < modeButton.length; i++) {
	modeButton[i].addEventListener("click", function() {
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy") {
			colorAmount = 3;
			for (var i = colorAmount; i < squares.length; i++) {
				squares[i].style.display = "none";
			}
		}
		else {
			colorAmount = 6;
			for (var i = 3; i < squares.length; i++) {
				squares[i].style.display = "block";
			}
		}
		reset();
	});
}

//reset function to be used on page startup clicking mode buttons and reset button
function reset() {
	changeColors(colorAmount);
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	message.textContent = "";	
}

//add interaction to reset button
resetButton.addEventListener("click", function() {
	reset();
});

//function to change colors displayed on the screen
function changeColors(num) {
	var arr = generateRandomColors(num);
	pickedColor = arr[Math.floor(Math.random() * num)]; // pick choose a color from the colors we generated to be the final answer
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = arr[i];
	}
}

//a function to generate random colors that takes the number of colors wanted as a parameter, then returns an array containing the random colors
function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {	
		arr.push(randomColor());
	}

	return arr;
}

//a function to generate a single random color then returns a string via rgb
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}