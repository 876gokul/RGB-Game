// =============================================
// variables
// =============================================
var numSquares = 6;
var colors = [];
var pickedColor;
// =============================================
// getting DOM elements
// =============================================
var squares = document.querySelectorAll(".color-box");
var colorDisplay = document.getElementById("color");
var messageDisplay = document.querySelector(".result");
var h1 = document.querySelector(".display");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
// =============================================
// main function
// =============================================
init();
// =============================================
// functions
// =============================================
function init() {
  setupModeButtons();
  setupSquares();
  reset();
}
// =============================================
// function for mode
// =============================================
function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("active");
      modeButtons[1].classList.remove("active");
      this.classList.add("active");
      this.textContent === "easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
// =============================================
// function for setting up squares
// =============================================
function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function() {
      var clickedColor = this.style.background;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#0C090B";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}
// =============================================
// function for reset
// =============================================
function reset() {
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.background = "#0F122F";
}

resetButton.addEventListener("click", function() {
  reset();
});
// =============================================
// function for changing colors
// =============================================
function changeColors(color) {
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}
// =============================================
// function for picking a color form colors[]
// =============================================
function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
// =============================================
// function for getting random colors
// =============================================
function generateRandomColors(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}
// =============================================
// function random colors
// =============================================
function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}