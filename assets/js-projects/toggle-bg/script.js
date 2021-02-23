// onclick method

function changeColor() {
  console.log("hello i am working");
  var background = document.getElementById("body");
  var text = document.querySelectorAll(".heading");

  background.classList.toggle("black-body");
  text[0].classList.toggle("white-text");
  text[1].classList.toggle("white-text");
}

document.addEventListener("keypress", changeColor);
