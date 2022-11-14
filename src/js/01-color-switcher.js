function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('[data-page]');
startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopColor);

let attribute = null;

function changeColor() {
  attribute = setInterval(() => {
    const random = getRandomHexColor();
    body.style.backgroundColor = `${random}`;
  }, 1000);
  startBtn.disabled = !startBtn.disabled;
}

function stopColor() {
  if (startBtn.disabled) {
    startBtn.disabled = !startBtn.disabled;
    clearInterval(attribute);
  }
}
