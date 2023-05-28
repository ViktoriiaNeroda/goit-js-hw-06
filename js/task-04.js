let counterValue = 0;

const valueMin = document.querySelector("[data-action = decrement]");
const valuePlus = document.querySelector("[data-action = increment]");
const valueCalc = document.querySelector("#value");

valueMin.addEventListener("click", () => {
    counterValue -= 1;
    valueCalc.textContent = counterValue;
})

valuePlus.addEventListener("click", () => {
    counterValue += 1;
    valueCalc.textContent = counterValue;
})
// button.addEventListener("click", () => {
//   console.log("Button was clicked");