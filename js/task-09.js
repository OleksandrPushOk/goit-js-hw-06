
const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');
changeColorEl.addEventListener('click', () => {
  colorEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + colorEl.textContent
  );
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}