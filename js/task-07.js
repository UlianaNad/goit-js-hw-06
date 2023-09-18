const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


input.addEventListener("input", handleInputRange);
function handleInputRange(event) {
  text.style.fontSize = event.currentTarget.value + "px";
}