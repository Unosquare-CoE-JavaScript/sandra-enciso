/* from https://www.codewars.com/kata/51c8e37cee245da6b40000bd */
/**
 * Complete the solution so that it strips all text that follows any of a set of comment markers passed in.
 * Any whitespace at the end of the line should also be stripped out.
 */

function solution(input, markers) {
  let regex = new RegExp(`[${markers.join("")}]`);
  return input
    .split("\n")
    .map((x) => x.split(regex)[0].trim())
    .join("\n");
}
