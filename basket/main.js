"use strict!";
const cart = [
  {
    name: "банан",
    price: 50,
    id: 1,
    url: "./images/banana.png",
  },
  {
    name: "Лемон",
    price: 20,
    id: 2,
    url: "./images/lemon.png",
  },
  {
    name: "Апельсин",
    price: 30,
    id: 3,
    url: "./images/orange.png",
  },
  {
    name: "Виноград",
    price: 40,
    id: 4,
    url: "./images/grape.png",
  },
  {
    name: "Яблоко",
    price: 50,
    id: 5,
    url: "./images/apple.png",
  },
];
console.log(cart);

//window.localStorage.setItem(boughtItem, basket);
cart.forEach((item) => {
  const catalog = document.getElementById("catalog");
  catalog.insertAdjacentHTML(
    "beforeend",
    `<div id="${item.id}"style="margin: 5px" >
    <img style="width: 50px" style="height:50px" src="${item.url}" alt="img">
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
    basket.unshift(single);
    singlePrice = single.price;
    totalPrice += singlePrice;
    totalCount++;
    if (totalPrice <= 0) {
      console.log("корзина пуста");
    } else {
      console.log(totalPrice);
      console.log(totalCount);
      document.getElementById("totalPrice").value = totalPrice + " рублей";
      document.getElementById("totalCount").value = totalCount;
    }
  });
});
let basket = [];
console.log(basket);
const check = document.getElementById("sendBtn");
check.addEventListener("click", function basketCheck() {
  localStorage.setItem("boughtItems", JSON.stringify(basket));
  basket = JSON.parse(localStorage.getItem("boughtItems"));
  console.log(basket);
});
