var colors = generatedColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var rgb = document.getElementById("rgb");
    rgb.textContent = pickedColor;
var message = document.getElementById("message");


for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  //add click listeners to squares
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if (clickedColor === pickedColor) {
      message.textContent = "That is correct!"
      changeColors(clickedColor);
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
    squares[i].style.backgroundColor = color
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
    }
  //return the array
  return arr;
}

function randomColor(){

}
