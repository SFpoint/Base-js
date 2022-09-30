"use strict!";
const cart = [
  {
    name: "банан",
    price: 50,
    id: 1,
  },
  {
    name: "Лемон",
    price: 20,
    id: 2,
  },
  {
    name: "Апельсин",
    price: 30,
    id: 3,
  },
  {
    name: "Виноград",
    price: 40,
    id: 4,
  },
  {
    name: "Яблоко",
    price: 50,
    id: 5,
  },
];
console.log(cart);

cart.forEach((item) => {
  const catalog = document.getElementById("catalog");
  catalog.insertAdjacentHTML(
    "beforeend",
    `<div id="${item.id}"style="margin: 5px" >
        ${item.name}: ${item.price} <button data-id="${item.id}" class="button">добавить</button>
        </div>`
  );
});

const buttons = document.querySelectorAll(".button");
let totalPrice = 0;
let totalCount = 0;
buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    current = event.target;
    items = current.dataset.id;
    single = cart.find((el, id) => typeof el === "object" && id === items - 1);
    singlePrice = single.price;
    totalPrice += singlePrice;
    totalCount++;
    if (totalPrice < 0) {
      console.log("корзина пуста");
    } else {
      console.log(totalPrice);
      console.log(totalCount);
      document.getElementById("totalPrice").value = totalPrice + " рублей";
      document.getElementById("totalCount").value = totalCount;
    }
  });
});
