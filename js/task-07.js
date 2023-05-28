const sizeControl = document.querySelector("#font-size-control");
const textMagic = document.querySelector("#text");

sizeControl.addEventListener("input", () => {
    textMagic.style.fontSize = `${sizeControl.value}px`;
});



// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });