"use strict";
let boughtItems = JSON.parse(localStorage.getItem("boughtItems"));

boughtItems.forEach((item) => {
  const jopa = document.getElementById("cart");
  jopa.insertAdjacentHTML(
    "beforeend",

    `  <div id="${item.id}"style="margin: 5px" >
    <img style="width: 50px" style="height:50px" src="${item.url}" alt="img">
    ${item.name}: ${item.price}  <button data-id="${item.id}">Удалить из корзины</button></div>`
  );
});

const remove = document.querySelectorAll(".button");
remove.forEach((button) => {
  button.addEventListener("click", function (event) {
    current = event.target;
    items = current.dataset.id;
    single = boughtItems.find(
      (el, id) => typeof el === "object" && id === items - 1
    );
    boughtItems.pop(single);
  });
});
