const inputField = document.querySelector("input");

inputField.addEventListener("blur", rightLight);

function rightLight(event) {
if (event.currentTarget.value.length === 6) {
        inputField.classList.add("valid")
} else {
    inputField.classList.add("invalid")
    }
  
    inputField.addEventListener("focus", () => {
        inputField.classList.remove("valid", "invalid");
    })
};

