//Напиши скрипт, який:
// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.



const categories = document.querySelectorAll(".item");
const categoriesAmount = categories.length;
//console.log(categories);
console.log("Number of categories:",categoriesAmount);


categories.forEach((category) => {
    const categoryTitle = category.firstElementChild.textContent;
    console.log("Category:",categoryTitle);

    const liAmount = category.lastElementChild.children.length;
    console.log("Elements:",liAmount);
});

