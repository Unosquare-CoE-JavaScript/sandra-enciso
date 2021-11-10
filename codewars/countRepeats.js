/*from https://www.codewars.com/kata/598ee7b6ec6cb90dd6000061 */
/**
 * Write a function that returns the count of characters that have to be removed in order to get a string with no consecutive repeats.
 *
 * examples
 * 'abbbbc'  => 'abc'    #  answer: 3
 * 'abbcca'  => 'abca'   #  answer: 2
 * 'ab cca'  => 'ab ca'  #  answer: 1
 *
 */

function countRepeats(str) {
  var count = 0;
  var prevStr = str.charAt(0);
  for (let i = 1; i < str.length; i++) {
    let currStr = str.charAt(i);
    if (prevStr === currStr) {
      count++;
    }
    prevStr = currStr;
  }
  return count;
}
