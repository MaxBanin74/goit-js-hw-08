function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const colorText = document.querySelector('.color');
const colorBtn = document.querySelector('.change-color');
colorBtn.addEventListener('click', onClick);

function onClick() {
  const colorVal = getRandomHexColor();
  document.body.style.backgroundColor = colorVal;
  colorText.textContent = colorVal;
}
