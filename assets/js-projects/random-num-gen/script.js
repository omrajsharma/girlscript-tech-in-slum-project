// console.log("hello");

var button = document.getElementById("button");

button.addEventListener("click", () => {
  var random = Math.floor(Math.random() * 10000);
  console.log(random);
  document.getElementById("otp").textContent= random;
});
