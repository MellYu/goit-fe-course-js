const inputRef = document.querySelector("#validation-input");
const classesList = inputRef.classList;
const symbolsQuantity = 6;
const checked = (event) => {
    classesList.add("valid");
  if (event.target.value.length !== symbolsQuantity) {
    classesList.remove("valid");
    classesList.add("invalid");
  } else {
    classesList.remove("invalid");
    classesList.add("valid");
  }
};

inputRef.addEventListener("focus", checked);
inputRef.addEventListener("blur", checked);