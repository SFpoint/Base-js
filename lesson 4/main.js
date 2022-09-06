function getDigitsOfNumber(num) {
  if (!Number.isInteger(num) || num < 0 || num > 999) {
    console.log(
      "Значение аргумента должно быть целым числом в диапазоне [0 .. 999]."
    );
    return {};
  }

  return {
    firstDigit: num % 10,
    secondDigit: Math.floor(num / 10) % 10,
    thirdDigit: Math.floor(num / 100),
  };
}

const basket = {
  goods: [
    {
      id_product: 123,
      product_name: "Ноутбук",
      price: 45600,
      quantity: 1,
    },
    {
      id_product: 456,
      product_name: "Мышка",
      price: 1000,
      quantity: 1,
    },
  ],
  countBasketPrice() {
    return this.goods.reduce(
      (totalPrice, cartItem) => (totalPrice += cartItem.price),
      0
    );
  },
};

console.log(basket.countBasketPrice());
