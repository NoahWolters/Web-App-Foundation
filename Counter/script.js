let counter = 0;

document.getElementById("main").addEventListener("click", () => {
  counter++;
  document.getElementById("counter").innerHTML = counter + "";
  document.getElementById("main").style.setProperty("--counter", counter + "%");
});

document.getElementById("button").addEventListener("click", () => {
  counter = 0;
  document.getElementById("counter").innerHTML = counter + "";
  document.getElementById("main").style.setProperty("--counter", counter + "%");
});
