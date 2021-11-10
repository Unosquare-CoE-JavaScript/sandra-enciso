/* from https://www.codewars.com/kata/58cc070abd22e324b300002a */

/**
 * You will receive two arrays, objs and keys. Duplicate objects mean that the object properties defined on keys are duplicated.
 */

function duplicated(arr, keys) {
  return arr.filter((a, i) =>
    arr.find((b, j) => i !== j && keys.every((key) => a[key] === b[key]))
  );
}
