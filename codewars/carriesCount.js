/* From https://www.codewars.com/kata/529fdef7488f509b81000061 */
/**
 * This Kata is about determining the number of carries performed during the addition of multi-digit numbers.
 */
function solve(input) {
  let operations = input.split("\n");

  return operations
    .map((input) => {
      let carries = returnCarries(...input.split(" "));
      if (!carries) {
        return "No carry operation";
      } else {
        return `${carries} carry operations`;
      }
    })
    .join("\n");

  function returnCarries(a, b) {
    let carries = 0,
      carry = 0;
    for (let i = a.length - 1; i >= 0; i--) {
      let aux = Number(a.charAt(i)) + Number(b.charAt(i)) + Number(carry);
      if (aux.toString().length > 1) {
        carries++;
        carry = aux.toString().charAt(0);
      } else {
        carry = 0;
      }
    }

    return carries;
  }
}
