document.addEventListener("slider", () => {
  let colorInputRed = document.querySelector("#red");
  let colorInputGreen = document.querySelector("#green");
  let colorInputBlue = document.querySelector("#blue");

  colorInputRed.addEventListener("input", mixColors);
  colorInputGreen.addEventListener("input", mixColors);
  colorInputBlue.addEventListener("input", mixColors);
});

function mixColors() {
  let red = document.getElementById("red").value;
  let green = document.getElementById("green").value;
  let blue = document.getElementById("blue").value;

  changeColor(red, green, blue);
}

function changeColor(r, g, b) {
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
mixColors();
