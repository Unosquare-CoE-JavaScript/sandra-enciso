/* From https://www.codewars.com/kata/51b62bf6a9c58071c600001b */

function solution(number) {
  let rm = ["", "M", "MM", "MMM"],
    rc = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    rd = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ru = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

  let m = rm[Math.trunc(number / 1000) % 10],
    c = rc[Math.trunc(number / 100) % 10],
    d = rd[Math.trunc(number / 10) % 10],
    u = ru[Math.trunc(number / 1) % 10];

  return m + c + d + u;
}
