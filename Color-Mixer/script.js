let colorInputRed = document.querySelector("#red");
let colorInputGreen = document.querySelector("#green");
let colorInputBlue = document.querySelector("#blue");

let currentValueRed = colorInputRed.addEventListener(
  "slider",
  () => {
    return document.getElementById("red").value;
  },
  false
);

let currentValueGreen = colorInputGreen.addEventListener(
  "slider",
  () => {
    return document.getElementById("green").value;
  },
  false
);

let currentValueBlue = colorInputBlue.addEventListener(
  "slider",
  () => {
    return document.getElementById("blue").value;
  },
  false
);

function changeColor(r, g, b) {
  document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}
console.log("NOah");
changeColor(currentValueRed, colorInputGreen, colorInputBlue);
