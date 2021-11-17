/* From https://www.codewars.com/kata/51e056fe544cf36c410000fb */
/**
 * Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
 */
function topThreeWords(text) {
  let regex = /([a-z]+'?[a-z]?)/gi;

  let countForWords = [];

  let words = text.match(regex);

  if (!words) {
    return [];
  }

  words
    .map((x) => x.toLowerCase())
    .sort()
    .forEach((x, i, arr) => {
      if (x != arr[i - 1]) {
        countForWords.push({
          word: x,
          qty: arr.filter((word) => word === x).length,
        });
      }
    });

  countForWords.sort((a, b) => {
    if (a.qty > b.qty) {
      return -1;
    }

    if (a.qty < b.qty) {
      return 1;
    }
    return 0;
  });

  countForWords.splice(3);

  let result = countForWords.map((x) => x.word);

  return result;
}
