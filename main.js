const numInput = document.getElementById("num-input");
const addButton = document.getElementById("add-button");
const clearButton = document.getElementById("clear-button");
const outputContainer = document.getElementById("output-container");

addButton.addEventListener("click", () => {
  const num = parseInt(numInput.value);
  if (isNaN(num)) {
    alert("Please enter a valid number");
    return;
  }
  const label = document.createElement("label");
  label.textContent = num;
  outputContainer.appendChild(label);
  numInput.value = "";
});
clearButton.addEventListener("click", () => {
  while (outputContainer.firstChild) {
    outputContainer.removeChild(outputContainer.firstChild);
  }
});
const labels = outputContainer.getElementsByTagName("label");
for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", () => {
    labels[i].classList.toggle("selected");
  });
}

