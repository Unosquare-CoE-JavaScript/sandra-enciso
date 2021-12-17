/* from https://www.codewars.com/kata/5202ef17a402dd033c000009 */
/**
 * EXAMPLES
 * titleCase('a clash of KINGS', 'a an the of') // should return: 'A Clash of Kings'
 * titleCase('THE WIND IN THE WILLOWS', 'The In') // should return: 'The Wind in the Willows'
 * titleCase('the quick brown fox') // should return: 'The Quick Brown Fox'
 */

function titleCase(title, minorWords = "") {
  minorWords = minorWords.split(" ").map((x) => x.toLowerCase());
  return title
    .split(" ")
    .map((x, i) =>
      minorWords.includes(x.toLowerCase()) && i != 0
        ? x.toLowerCase()
        : x.charAt(0).toUpperCase() + x.slice(1).toLowerCase()
    )
    .join(" ");
}
