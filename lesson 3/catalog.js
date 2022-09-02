banana = {
  name: "банан",
  price: 50,
  id: 1,
};
lemons = {
  name: "Лемон",
  price: 20,
  id: 2,
};
oranges = {
  name: "Апельсин",
  price: 30,
  id: 3,
};
grapes = {
  name: "Виноград",
  price: 40,
  id: 4,
};
apples = {
  name: "Яблоко",
  price: 50,
  id: 5,
};
let cart = [banana, lemons, oranges, grapes, apples];
console.log(cart);
cart.forEach((item) =>
  document.body.insertAdjacentHTML(
    "beforeend",
    `<div style="margin: 5px" >
    ${item.name}: ${item.price} <button onclick="addToCart()">добавить</button>
    </div>`
  )
);
function addToCart() {
  cart.forEach((item) => {
    item = this.item;
    console.log(item);
  });
}
