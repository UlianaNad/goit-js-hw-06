function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const refs = {
  button : document.querySelector(".change-color"),
  span : document.querySelector(".color"),
  body: document.querySelector("body")
}

refs.button.addEventListener('click', () => {
 const randomColor = getRandomHexColor();
  refs.body.style.background = randomColor;
  refs.span.textContent = randomColor;
})