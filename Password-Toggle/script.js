let myPassword = document.querySelector("#password");
let myButton = document.querySelector("#btn");

myButton.addEventListener("click", function () {
  if (myPassword.getAttribute("type") === "password") {
    myPassword.setAttribute("type", "text");
    myButton.textContent = "Hide Password";
  } else {
    myPassword.setAttribute("type", "password");
    myButton.textContent = "Show Password";
  }
});
