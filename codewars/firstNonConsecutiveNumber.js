/* From https://www.codewars.com/kata/58f8a3a27a5c28d92e000144 */
/*
Your task is to find the first element of an array that is not consecutive. */
function firstNonConsecutive(arr) {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] != arr[i] - 1) {
      return arr[i];
    }
  }
  return null;
}
