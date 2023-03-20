const startBtn = document.querySelector("[data-start]");
const stopBtn = document.querySelector("[data-stop]");
const bodyEl = document.querySelector("body");

startBtn.addEventListener("click", handlStartChangeColor);
stopBtn.addEventListener("click", handlStopChangeColor);

startBtn.disabled = false;
let changeColorId;

function handlStartChangeColor() {
  if (startBtn.disabled === true) {
    return;
  }
  startBtn.disabled = true;
  changeColorId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function handlStopChangeColor() {
  if (startBtn.disabled === false) {
    return;
  }
  clearInterval(changeColorId);
  startBtn.disabled = false;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
