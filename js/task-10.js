
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const elements = {
  numberField: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  boxElements: document.querySelector("#boxes"),
};

elements.createBtn.addEventListener("click", () => {
  const amount = elements.numberField.value;
  if (amount > 0) {
    createBoxes(amount);
  }
});

elements.destroyBtn.addEventListener("click", () => {
  elements.boxElements.innerHTML = "";
  elements.numberField.value = "";
  newBoxes.length = 0;
});

const newBoxes = [];

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let box = document.createElement("div");

    box.style.width = 30 + 10 * (newBoxes.length - 1) + 10 + 10 + "px";
    box.style.height = box.style.width;
    box.style.marginTop = 4 + "px";
    box.style.backgroundColor = getRandomHexColor();

    newBoxes.push(box);
  }
  elements.boxElements.append(...newBoxes);
}
