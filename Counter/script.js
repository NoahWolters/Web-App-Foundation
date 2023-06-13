"use strict";
let counter = 0;

document.querySelector("#main").addEventListener("click", () => {
  counter++;
  if (counter === 100) {
    counter = 0;
  }
  document.getElementById("main").style.setProperty("--counter", counter + "%");
  document.getElementById("counter").innerHTML = counter + "";
});

document.getElementById("button").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counter").innerHTML = counter + "";
  document.getElementById("main").style.setProperty("--counter", counter + "%");
});
document.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    console.log("nur bei Enter");
  }
});
