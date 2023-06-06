let currentState = "light mode";
document.addEventListener("click", () => {
  if (currentState === "light mode") {
    currentState = "dark mode";
    document.body.classList.toggle("body");
    document.body.classList.add("dark--mode");
    document.getElementById("mybtn").classList.toggle("button--dark");
    document.title = "good night";

    console.log("AUS");
  } else {
    currentState = "light mode";
    document.body.classList.toggle("body");
    document.body.classList.remove("dark--mode");
    document.getElementById("mybtn").classList.toggle("button--dark");
    document.title = "good morning";

    console.log("AN");
  }
});
