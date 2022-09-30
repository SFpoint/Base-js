"use strict!";
const cart = [
  {
    name: "банан",
    price: 50,
    id: 1,
<<<<<<< HEAD
=======
    url: "./images/banana.png",
>>>>>>> devbranch
  },
  {
    name: "Лемон",
    price: 20,
    id: 2,
<<<<<<< HEAD
=======
    url: "./images/lemon.png",
>>>>>>> devbranch
  },
  {
    name: "Апельсин",
    price: 30,
    id: 3,
<<<<<<< HEAD
=======
    url: "./images/orange.png",
>>>>>>> devbranch
  },
  {
    name: "Виноград",
    price: 40,
    id: 4,
<<<<<<< HEAD
=======
    url: "./images/grape.png",
>>>>>>> devbranch
  },
  {
    name: "Яблоко",
    price: 50,
    id: 5,
<<<<<<< HEAD
=======
    url: "./images/apple.png",
>>>>>>> devbranch
  },
];
console.log(cart);

<<<<<<< HEAD
=======
//window.localStorage.setItem(boughtItem, basket);
>>>>>>> devbranch
cart.forEach((item) => {
  const catalog = document.getElementById("catalog");
  catalog.insertAdjacentHTML(
    "beforeend",
    `<div id="${item.id}"style="margin: 5px" >
<<<<<<< HEAD
=======
    <img style="width: 50px" style="height:50px" src="${item.url}" alt="img">
>>>>>>> devbranch
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
<<<<<<< HEAD
    singlePrice = single.price;
    totalPrice += singlePrice;
    totalCount++;
    if (totalPrice < 0) {
=======
    basket.unshift(single);
    singlePrice = single.price;
    totalPrice += singlePrice;
    totalCount++;
    if (totalPrice <= 0) {
>>>>>>> devbranch
      console.log("корзина пуста");
    } else {
      console.log(totalPrice);
      console.log(totalCount);
      document.getElementById("totalPrice").value = totalPrice + " рублей";
      document.getElementById("totalCount").value = totalCount;
    }
  });
});
<<<<<<< HEAD
=======
let basket = [];
console.log(basket);
const check = document.getElementById("sendBtn");
check.addEventListener("click", function basketCheck() {
  localStorage.setItem("boughtItems", JSON.stringify(basket));
  basket = JSON.parse(localStorage.getItem("boughtItems"));
  console.log(basket);
});
>>>>>>> devbranch
