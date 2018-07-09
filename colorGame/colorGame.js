var numSquares = 6;
var colors = generatedColors(numSquares);
var squares = document.querySelectorAll(".square");
var selectedColor = pickedColor();
var rgb = document.getElementById("rgb");
    rgb.textContent = selectedColor;
var message = document.getElementById("message");
var newGame = document.getElementById("newGame");
var headColor = document.getElementById("header");
var easyBtn = document.getElementById("easy");
var hardBtn = document.getElementById("hard");


for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

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
  //generate new colors
  colors = generatedColors(numSquares);
  //pick a new Colors
  selectedColor = pickedColor();
  // update header
  rgb.textContent = selectedColor;
  //change square Colors
  for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  //head color change
  }
  headColor.style.background = "#2b9dd6";
  message.textContent = "";
  newGame.textContent = "New Colors";

})

easyBtn.addEventListener("click", function(){
  //remove selected from hard
  hardBtn.classList.remove("selected");
  //add selected to easy
  easyBtn.classList.add("selected");
  //number of number of squares
  numSquares = 3;
  //only generates 3 colors
  colors = generatedColors(numSquares);
  //pick a new Colors
  selectedColor = pickedColor();
  // update header
  rgb.textContent = selectedColor;
  //change square Colors
  for (var i = 0; i < squares.length; i++) {
    if(colors[i]){
      //add initial colors to squares
      squares[i].style.background = colors[i];
      //remove bottom 3 squares that don't update.
    }else{
      squares[i].style.display = "none";
    }
  //head color change
  }
  headColor.style.background = "#2b9dd6";
  message.textContent = "";
  newGame.textContent = "New Colors";
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
  easyBtn.classList.remove("selected");
  //number of squares
  numSquares = 6;
  //generate new colors
  colors = generatedColors(6);
  //pick a new Colors
  selectedColor = pickedColor();
  // update header
  rgb.textContent = selectedColor;
  //change square Colors
  for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];
  squares[i].style.display = "block";
  //head color change
  }
  headColor.style.background = "#2b9dd6";
  message.textContent = "";
  newGame.textContent = "New Colors";
})
