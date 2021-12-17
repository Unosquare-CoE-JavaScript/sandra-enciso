/* From https://www.codewars.com/kata/51b66044bce5799a7f000003 */
/**
 * Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
 */

var RomanNumerals = {
  toRoman: (n) => {
    let rm = ["", "M", "MM", "MMM"],
      rc = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
      rd = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
      ru = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    let m = rm[Math.trunc(n / 1000) % 10],
      c = rc[Math.trunc(n / 100) % 10],
      d = rd[Math.trunc(n / 10) % 10],
      u = ru[Math.trunc(n / 1) % 10];

    return m + c + d + u;
  },
  fromRoman: (n) => {
    var conversion = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };

    return n
      .match(/CM|CD|XC|XL|IX|IV|\w/g)
      .reduce((accum, n) => accum + conversion[n], 0);
  },
};
