var colors = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(155, 25, 55)",
]

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
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color
  }
}

function pickedColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}
