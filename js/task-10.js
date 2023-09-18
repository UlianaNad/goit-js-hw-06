function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  boxes : document.querySelector('#boxes'),
  create: document.querySelector('button[data-create]'),
  destroy: document.querySelector('button[data-destroy]'),
  input: document.querySelector('input')
}


let myElems = [];

// adding new elements
function onCreateClick () {
  refs.boxes.innerHTML = '';
  const inputValue = refs.input.value;

  let size = 30;

  for( let i = 0; i < inputValue; i += 1){
    const elem = document.createElement('div');
    elem.classList.add("box");
    elem.style.background = getRandomHexColor();

    elem.style.width = size + "px";
    elem.style.height = size + "px";

    size += 10;

    myElems.push(elem);
  }

  refs.boxes.append(...myElems);
  myElems = [];
}
 
// clean the boxes

function onDestroyElements () {
  refs.boxes.innerHTML = '';
  myElems = [];
}

refs.create.addEventListener('click', onCreateClick);
refs.destroy.addEventListener('click', onDestroyElements);
