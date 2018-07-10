var numSquares = 9;
var colors = generatedColors(numSquares);
var squares = document.querySelectorAll(".square");
var selectedColor = pickedColor();
var rgb = document.getElementById("rgb");
    rgb.textContent = selectedColor;
var message = document.getElementById("message");
var newGame = document.getElementById("newGame");
var headColor = document.getElementById("header");
var modeButtons = document.querySelectorAll(".mode");

function init(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click",function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      modeButtons[2].classList.remove("selected");
      this.classList.add("selected");
      if (this.textContent === "Easy") {
        numSquares = 3;
      }else if (this.textContent === "Medium") {
        numSquares = 6;
      }else{
        numSquares = 9;
      }
      reset();
    });
  }

  for (var i = 0; i < squares.length; i++) {
    //add click listeners to squares
    squares[i].addEventListener("click", function(){
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === selectedColor) {
        message.textContent = "That is correct!"
        newGame.textContent = "Play Again?";
        changeColors(clickedColor);
        headColor.style.background = clickedColor;
      }else{
        this.style.backgroundColor = "#544e4e";
        message.textContent = "DERP! No..."
      }
    });
  }
  reset();
}

function reset(){
  //new colors generated
  colors = generatedColors(numSquares);
  //pick a new Colors
  selectedColor = pickedColor();
  // update header
  rgb.textContent = selectedColor;
  //change square Colors
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    }else{
      squares[i].style.display = "none";
    }
  //add initial colors to squares
  //head color change
  }
  headColor.style.background = "#2b9dd6";
  message.textContent = "";
  newGame.textContent = "New Colors";
}



function changeColors(color){
  //loop through all the squares
  for (var i = 0; i < squares.length; i++) {
  //changes each color to match the given color
    squares[i].style.backgroundColor = color;
  }
}

function pickedColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generatedColors(num){
  //make an array
  var arr = []
  //repeat num times
    for (var i = 0; i < num; i++){
  //get random color and push into array
  arr.push(randomColor())
    }
  //return the array
  return arr;
}

function randomColor(){
  //pick a red 0 - 255;
  var r = Math.floor(Math.random() * 256)
  //pick a green 0 - 255;
  var g = Math.floor(Math.random() * 256)
  //pick a blue 0 - 255;
  var b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

newGame.addEventListener("click", function(){
  reset();
})
