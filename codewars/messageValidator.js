/* From https://www.codewars.com/kata/5fc7d2d2682ff3000e1a3fbc */
/**
 * Example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and the function should return true, because "hey" is 3 characters, "hello" is 5, and "hi" is 2;
 * as the numbers and the character counts match, the result is true.
 */

function isAValidMessage(message) {
  if (!message) {
    return true;
  }
  if (!/([1-9]+[A-Z]+)+$/gi.test(message)) {
    return false;
  }
  let tokens = message.match(/[1-9]+[A-Z]+/gi);
  //console.log(tokens);
  return tokens.every((x) => {
    let str = x.match(/[1-9]+|[a-z]+/gi);
    return Number(str[0]) == str[1].length;
  });
}
