//Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;
const button = document.querySelector('button');

const valueElem = document.querySelector("#value");
//console.log(valueElem);
const buttons = document.querySelectorAll("[data-action]");
buttons.forEach((button) => {
    button.addEventListener("click",() =>{
        if(button.getAttribute("data-action") === "decrement"){
            counterValue -= 1;
            valueElem.textContent = counterValue;
        } else if (button.getAttribute("data-action") === "increment"){
            counterValue +=1;
            valueElem.textContent = counterValue;
        }
    });
});
