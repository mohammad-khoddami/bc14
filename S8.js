function opration(a, b, op) {
  switch (op) {
    case "/":
      return a / b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    default:
      return a + b;
  }
}
var result = opration(2, 4, "*");
console.log(result);
