/* from https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1 */
/**
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 */
function onlyDuplicates(str) {
  let duplicatedLetters = [];
  str
    .split("")
    .sort()
    .forEach((x, i, self) => {
      if (x != self[i - 1]) {
        let qty = self.filter((word) => word === x).length;
        if (qty > 1) {
          duplicatedLetters.push(x);
        }
      }
    });

  let result = "";
  str.split("").forEach((x) => {
    if (duplicatedLetters.includes(x)) {
      result += x;
    }
  });

  return result;
}
