/* from https://www.codewars.com/kata/52f3eeb274c7e693a600288e */
function insertAtIndexes(phrase, word, indexes) {
  var newPhrase = "";
  for (let i = 0; i < phrase.length; i++) {
    newPhrase += indexes.includes(i)
      ? `${word}${phrase.charAt(i)}`
      : phrase.charAt(i);
  }
  if (indexes.includes(phrase.length + 1)) {
    newPhrase += word;
  }
  return newPhrase;
}
