/* from https://www.codewars.com/kata/52b757663a95b11b3d00062d */
/**
 * EXAMPLE toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"
 */

function toWeirdCase(string) {
  let tokens = string.split(" ").map((x) => {
    return x
      .split("")
      .map((y, i) => {
        if (i % 2) {
          return y.toLowerCase();
        } else {
          return y.toUpperCase();
        }
      })
      .join("");
  });
  return tokens.join(" ");
}
