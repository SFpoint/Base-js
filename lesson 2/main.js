function first() {
  var a = 1,
    b = 1,
    c,
    d;
  c = ++a;
  console.log("1", c);
  d = b++;
  console.log("2", d);
  c = 2 + ++a;
  console.log("3", c);
  d = 2 + b++;
  console.log("4", d);
  console.log("5", a);
  console.log("6", b);
}
function second() {
  var a = 2;
  var x = 1 + (a *= 2);
  console.log(x);
}
function third() {
  let a = Number(prompt("введите число a"));
  let b = Number(prompt("введите число b"));
  if (a > 0 && b > 0) {
    console.log(a - b);
  } else if (a < 0 && b < 0) {
    console.log(a * b);
  } else {
    console.log(a + b);
  }
}
function fourth() {
  a = 0;
  for (let a = 0; a <= 15; a++)
    switch (a) {
      case (a = 0):
        console.log(a);
        break;
      case (a = 1):
        console.log(a);
        break;
      case (a = 2):
        console.log(a);
        break;
      case (a = 3):
        console.log(a);
        break;
      case (a = 4):
        console.log(a);
        break;
      case (a = 5):
        console.log(a);
        break;
      case (a = 6):
        console.log(a);
        break;
      case (a = 7):
        console.log(a);
        break;
      case (a = 8):
        console.log(a);
        break;
      case (a = 9):
        console.log(a);
        break;
      case (a = 10):
        console.log(a);
        break;
      case (a = 11):
        console.log(a);
        break;
      case (a = 12):
        console.log(a);
        break;
      case (a = 13):
        console.log(a);
        break;
      case (a = 14):
        console.log(a);
        break;
      case (a = 15):
        console.log(a);
        break;
    }
}
function fifthPlus() {
  let a = Number(prompt("введите число a"));
  let b = Number(prompt("введите число b"));
  console.log(a + b);
  {
    return a + b;
  }
}
function fifthMinus() {
  let a = Number(prompt("введите число a"));
  let b = Number(prompt("введите число b"));
  console.log(a - b);
  {
    return a - b;
  }
}
function fifthMultiply() {
  let a = Number(prompt("введите число a"));
  let b = Number(prompt("введите число b"));
  console.log(a * b);
  {
    return a * b;
  }
}
function fifthDivide() {
  let a = Number(prompt("введите число a"));
  let b = Number(prompt("введите число b"));
  console.log(a / b);
  {
    return a / b;
  }
}
function mathOperation(arg1, arg2, operation) {
  arg1 = Number(prompt("введите 1 число"));
  arg2 = Number(prompt("введите 2 число "));
  operation = prompt("выберите действие");
  switch (operation) {
    case (operation = "+"):
      console.log(arg1 + arg2);
      break;
    case (operation = "-"):
      console.log(arg1 - arg2);
      break;
    case (operation = "*"):
      console.log(arg1 * arg2);
      break;
    case (operation = "/"):
      console.log(arg1 / arg2);
      break;
  }
}
function power(val, pow) {
  if (val == 1) {
    return val;
  } else {
    return val * (val * (pow - 1));
  }
}

function callBack() {
  val = Number(prompt("введите 1 число"));
  pow = Number(prompt("введите 2 число"));
  console.log(power(val, pow));
}
