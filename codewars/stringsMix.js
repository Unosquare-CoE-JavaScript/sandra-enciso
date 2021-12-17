/* from https://www.codewars.com/kata/5629db57620258aa9d000014 */

function mix(s1, s2) {
  let letters = getLettersInTexts(s1, s2),
    result = [];
  s1 = s1.split("");
  s2 = s2.split("");
  letters.forEach((x) => {
    let repetitionsTxt1 = s1.filter((a) => a === x).length;
    let repetitionsTxt2 = s2.filter((a) => a === x).length;
    let qty = Math.max(repetitionsTxt1, repetitionsTxt2);
    if (qty > 1) {
      let noText =
        repetitionsTxt1 === repetitionsTxt2
          ? 3
          : repetitionsTxt1 > repetitionsTxt2
          ? 1
          : 2;
      result.push({ qty: qty, key: x, noText: noText });
    }
  });
  result.sort((a, b) => {
    if (a.qty > b.qty) {
      return -1;
    }
    if (a.qty < b.qty) {
      return 1;
    }
    if (a.qty === b.qty) {
      if (a.noText < b.noText) {
        return -1;
      }

      if (a.noText > b.noText) {
        return 1;
      }

      if (a.noText == b.noText) {
        if (a.key < b.key) {
          return -1;
        }
        return 1;
      }
    }
  });
  return printResult(result);
}

function getLettersInTexts(txt1, txt2) {
  let result = new Set([...txt1.match(/[a-z]/g), ...txt2.match(/[a-z]/g)]);
  return [...result];
}

function printResult(words) {
  return words
    .map((x) => `${x.noText === 3 ? "=" : x.noText}:${x.key.repeat(x.qty)}`)
    .join("/");
}
