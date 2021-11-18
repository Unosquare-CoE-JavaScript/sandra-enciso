/* From https://www.codewars.com/kata/577e9095d648a15b800000d4 */
function postfixEvaluator(string) {
  let expression = string.split(" ");
  var simbolos = ["+", "-", "*", "/", "(", ")", "%", "?"];
  var pile = [],
    x = 0,
    y = 0;
  for (let i = 0; i < expression.length; i++) {
    let element = expression[i];
    if (simbolos.includes(element)) {
      switch (element) {
        case "%":
          x = Number(pile.pop());
          y = Number(pile.pop());
          pile.push(y % x);
          break;
        case "*":
          x = Number(pile.pop());
          y = Number(pile.pop());
          pile.push(y * x);
          break;
        case "/":
          x = Number(pile.pop());
          y = Number(pile.pop());
          pile.push(Math.trunc(y / x));
          break;
        case "+":
          x = Number(pile.pop());
          y = Number(pile.pop());
          pile.push(y + x);
          break;
        case "-":
          x = Number(pile.pop());
          y = Number(pile.pop());
          pile.push(y - x);
          break;
      }
    } else {
      pile.push(element);
    }
  }
  return pile.pop();
}
