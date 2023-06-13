const btn = document.querySelector("#btn-pick");
const resetButton = document.querySelector("#reset-btn");

let count = 0;
function pickRandomNumber() {
  const min = 1;
  const max = 50;

  return Math.floor(Math.random() * (max - min) + min);
}

btn.addEventListener("click", () => {
  document.querySelector("main").textContent += pickRandomNumber() + " ";
  Buttoncount();
});
resetButton.addEventListener("click", () => {
  count = 0;
  document.querySelector("main").textContent = " ";
  document.querySelector("#btn-pick").disabled = false;
});

function Buttoncount() {
  count++;
  if (count === 6) {
    document.querySelector("#btn-pick").disabled = true;
  }
}
//document.querySelector('#button').disabled = false;
