/* from https://www.codewars.com/kata/56121f3312baa28c8500005b */
/**
 * that given an array of numbers >= 0, will arrange them such that they form the biggest number.
 */

/**
 * examples
 * biggest([3, 30, 34, 5, 9]) === '9534330'
 */

function biggest(nums) {
  if (nums.every((x) => !x)) {
    return "0";
  }

  return nums
    .map((x) => x.toString())
    .sort((a, b) => {
      if (a + b > b + a) {
        return -1;
      }
      if (a + b < b + a) {
        return 1;
      }
      return 0;
    })
    .join("");
}
