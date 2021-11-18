/* from https://www.codewars.com/kata/56b3b27cadd4ad275500000c */

function wordCount(s) {
  var regexOnlyWords = /[a-z]+/gi;
  var onlyWords = s.match(regexOnlyWords).join(" ");
  var regexExcludeWords = /\b(?!(a|the|on|at|of|upon|in|as)\b)[a-z]+/gi;
  return onlyWords.match(regexExcludeWords).length;
}
