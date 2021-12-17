/* from https://www.codewars.com/kata/59be8c08bf10a49a240000b1 */
/**
 * In this kata, you will make a function that converts between camelCase, snake_case, and kebab-case.
 * You must write a function that changes to a given case. It must be able to handle all three case types:
 */

function changeCase(identifier, targetCase) {
  console.log(identifier, targetCase);
  if (!identifier) {
    return "";
  }
  /*Hacer test con el identifier, tiene que ser snake, camel o kebab para ser válido*/
  let camelCase = /^[a-z]+([A-Z]+[a-z]*[A-Za-z]*)+$/;
  let snakeCase = /^[a-z]+(_[a-z]+)+$/;
  let kebab = /^[a-z0-9]+(-[a-z0-9]+)+$/;

  if (
    !(
      camelCase.test(identifier) ||
      snakeCase.test(identifier) ||
      kebab.test(identifier) ||
      /^[a-z]+$/.test(identifier)
    )
  ) {
    return;
  }

  let tokens = identifier.split(/[-_]/g);
  if (tokens.length === 1) {
    tokens = tokens[0]
      .match(/\b[a-z]+|([A-Z][a-z]*)/g)
      .map((x) => x.toLowerCase());
  }
  switch (targetCase) {
    case "snake":
      //snake_case
      return tokens.join("_");
      break;
    case "camel":
      //camelCase
      return tokens
        .map((x, i) => (i != 0 ? x.charAt(0).toUpperCase() + x.slice(1) : x))
        .join("");
      break;
    case "kebab":
      //kebab-case
      return tokens.join("-");
      break;
    default:
      return;
  }
}
