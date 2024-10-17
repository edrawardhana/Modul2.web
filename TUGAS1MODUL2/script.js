let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    let value = button.value;

    if (value === "AC") {
      display.textContent = ""; // Clears the display when AC is pressed
    } else if (value === "=") {
      try {
        let result = eval(display.textContent);
        display.textContent = result;
      } catch (error) {
        display.textContent = "Error";
      }
    } else {
      display.textContent += value;
    }
  });
});
