var colors = [
  "rgb(0, 200 ,5)",
  "rgb(200, 0, 5)",
  "rgb(5, 5 ,200)",
  "rgb(244, 200, 5)", 
  "rgb(100,  200, 5)", 
  "rgb(155, 50, 5)"
]

var squares =  document.querySelectorAll(".square");
var pickedColor = colors[2];
 var colorDisplay = document.querySelector("#colorDisplay");
 
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
   squares[i].style.background = colors[i]

    squares[i].addEventListener("click", function(){
      var clickedcolor = this.style.background;
   var pickedColor = colors[2];

    if(clickedcolor != pickedColor) {
     this.style.background = "black";
    } else {
      alert("correrct");
    }

    });
  }
