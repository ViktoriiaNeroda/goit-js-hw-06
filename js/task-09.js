function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const nameColor = document.querySelector(".color");
const btnChange = document.querySelector(".change-color");
const body = document.querySelector("body");

btnChange.addEventListener("click", () => {
  nameColor.textContent = getRandomHexColor();

  body.style.backgroundColor = `${nameColor.textContent}`;
});
// getRandomHexColor();
// btnChange.addEventListener("change", getRandomHexColor);

